const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const goodsmodel=require("../dao/goodsDao");
var goodsArry=[];
var goodsObj={};
var shopdelId=[];
var orderArry=[];
var orderObj={};
const controller={
    //商品
    goodsList(req,resp){
        goodsmodel.getAllgoods()
            .then(function (data) {
                resp.render("goods/goods",{mygoods:data});
            });
    },
    //商品详情
    goodsDetails2(req,resp){
        let goodsnum=req.query.goodsnum;
        let goodsprice=req.query.goodsprice;
        let totalprice=req.query.totalprice;
        goodsObj.goodsnum=goodsnum;
        goodsObj.goodsprice=goodsprice;
        goodsObj.totalprice=totalprice;
        goodsArry.push(goodsObj);
    },
    goodsDetails(req,resp){
        let id=req.query.id;
        goodsObj.goodsid=id;
        goodsArry.push(goodsObj);
        let cateid=req.query.cateid;
        let uid=req.session.user;
        goodsmodel.getGoodsDetail([id])
            .then(function (data) {
                let detailgoods=data;
                goodsmodel.getHotgoods()
                    .then(function (data) {
                        let hotgoods=data;
                        goodsmodel.getRelevant([cateid])
                            .then(function (data) {
                               let cateidgoods=data;
                                goodsmodel.getScore(id)
                                    .then(function (data) {
                                        let goodsScore=data;
                                        goodsmodel.getComments([id])
                                            .then(function (data) {
                                                let goodsComments=data;
                                                goodsmodel.getgood([id])
                                                    .then(function (data) {
                                                       let goodcom=data;
                                                        goodsmodel.getmed([id])
                                                            .then(function (data) {
                                                                let goodmed=data;
                                                                goodsmodel.getbad([id])
                                                                    .then(function (data) {
                                                                        let goodbad=data;
                                                                        goodsmodel.getcart([uid])
                                                                            .then(function (data) {
                                                                                let myuser=data;
                                                                                resp.render("goods/goods_details",{goodsdetails:detailgoods,goodshot:hotgoods,goodscate:cateidgoods,goodsScore:goodsScore,goodsComments:goodsComments,goodcom:goodcom,goodmed:goodmed,goodbad:goodbad,myuser:myuser,myuid:uid});
                                                                            });
                                                                    });
                                                            });
                                                    });
                                            });
                                    });
                            });
                    });
            });
    },
    //订单
    Order(req,resp){
        let useridd=req.session.user;
        goodsmodel.getcart([useridd])
            .then(function (data) {
                let shoporder=data;
                goodsmodel.totalcart([useridd])
                    .then(function (data) {
                        let totalorder=data;
                        resp.render("goods/order",{shoporder:shoporder,totalorder:totalorder});
                    });
            });
    },
    //支付
    Pay2(req,resp){
        let ausername=req.query.ausername;
        let address=req.query.address;
        let zipcode=req.query.zipcode;
        let eamil=req.query.eamil;
        let phone=req.query.phone;
        let isdefault=req.query.isdefault;
        let creattime=req.query.creattime;
        let orderno=req.query.orderno;
        let totalprice=req.query.totalprice;
        let paytype=req.query.paytype;
        let payform=req.query.payform;
        orderObj.ausername=ausername;
        orderObj.address=address;
        orderObj.zipcode=zipcode;
        orderObj.eamil=eamil;
        orderObj.phone=phone;
        orderObj.isdefault=isdefault;
        orderObj.creattime=creattime;
        orderObj.orderno=orderno;
        orderObj.totalprice=totalprice;
        orderObj.paytype=paytype;
        orderObj.payform=payform;
        orderArry.push(orderObj);
        console.log(orderArry[0])
    },
    Pay(req,resp){
        let usertel=req.session.user;
        let totalof=req.query.totalof;
        let sql="INSERT INTO address VALUE(NULL,(SELECT u.u_id FROM users u WHERE u.tel='"+usertel+"'),?,?,?,?,?,?,?)";
        dbpool.connect(sql,
            [orderArry[0].ausername,orderArry[0].address,orderArry[0].zipcode,orderArry[0].eamil,orderArry[0].phone,orderArry[0].isdefault,orderArry[0].creattime],(err,data)=>{
            dbpool.connect("INSERT INTO goodsorder VALUE(NULL,(SELECT u.u_id FROM users u WHERE u.tel=?),(SELECT MAX(a.addressId) AS maxaId FROM address a,users u WHERE a.u_id=u.u_id AND u.tel=?),?,'0',?,?,?,?,'0','0',NULL,NULL,NULL,?,'1','0')",
                    [usertel,usertel,orderArry[0].orderno,orderArry[0].totalprice,orderArry[0].totalprice,orderArry[0].paytype,orderArry[0].payform,orderArry[0].creattime],(err,data)=>{
                    dbpool.connect("INSERT INTO order_goods(goods_ID,u_id)SELECT DISTINCT sc.goods_ID,u.u_id FROM goods g,users u,shop_cart sc WHERE g.goods_ID=sc.goods_ID AND sc.u_id=u.u_id AND u.tel=?",
                        [usertel],(err,data)=>{
                            dbpool.connect("SELECT * FROM shop_cart sc,users u,goods g WHERE sc.u_id=u.u_id AND sc.goods_ID=g.goods_ID and u.tel=?",
                                [usertel],(err,data)=>{
                                    let paygoods=data;
                                    dbpool.connect("",
                                        [],(err,data)=>{
                                            resp.render("goods/pay",{paysuccess:"支付成功",paygoods:paygoods,paytotalof:totalof});
                                        })
                                })
                        })
                    })
            })
    },
    //购物车
    shopCart(req,resp){
        let userid=req.session.user;
        goodsmodel.getcart([userid])
            .then(function (data) {
                let shopCart=data;
                goodsmodel.totalcart([userid])
                    .then(function (data) {
                        let totalcart=data;
                        console.log(totalcart);
                        resp.render("goods/shop_cart",{shopCart:shopCart,totalcart:totalcart});
                    });
            });
    },
    //加入购物车
    addshopCart(req,resp){
        let uname=req.session.user;
        let sql="INSERT INTO shop_cart VALUE(NULL,(SELECT u.u_id FROM users u WHERE u.tel='"+uname+"'),?,?,?,?,'0')";
        dbpool.connect(sql,
            [goodsArry[0].goodsid,goodsArry[0].goodsnum,goodsArry[0].goodsprice,goodsArry[0].totalprice],(err,data)=>{

            })
    },
    //移除购物车商品
    delshopCart2(req,resp){
        let shopcartid=req.query.shopcartid;
        shopdelId.splice(0,shopdelId.length);
        shopdelId.push(shopcartid);
        console.log(shopdelId[0]);
    },
    delshopCart(req,resp){
        goodsmodel.delcartgoods([shopdelId[0]])
            .then(function (data) {
                console.log(data);
                resp.redirect("/shop_cart");
            });
    }
};
module.exports=controller;