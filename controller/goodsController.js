const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const goodsmodel=require("../dao/goodsDao");
var goodsArry=[];
var goodsObj={};
var shopdelId=[];
var orderArry=[];
var orderObj={};
var glistArry=[];
var glistObj={};
var couponArry=[];
var couponObj={};
const controller={
    //商品
    goodsList(req,resp){
        if(req.query.input!=undefined){
            let input=req.query.input;
            let mysql="SELECT * FROM goods WHERE goodsName LIKE '%";
            let mysql1="%'";
            goodsmodel.ss(input,mysql,mysql1)
                .then(function (data) {
                    console.log(data.length)
                    resp.render("goods/goods",{mygoods:data});
                });
        }else {
            let myuserlist=req.session.user;
            goodsmodel.getAllgoods()
                .then(function (data) {
                    console.log("空");
                    let mygoods=data;
                    resp.render("goods/goods",{mygoods:mygoods,myuserlist:myuserlist});
                });
        }
    },
    goodsList2(req,resp){
        let goodsimgList=req.query.goodsimgList;
        let goodsnameList=req.query.goodsnameList;
        let goodspriceList=req.query.goodspriceList;
        let goodsIDList=req.query.goodsID;
        glistObj.goodsimgList=goodsimgList;
        glistObj.goodsnameList=goodsnameList;
        glistObj.goodspriceList=goodspriceList;
        glistObj.goodsIDList=goodsIDList;
        glistArry.push(glistObj);
        console.log(glistArry);
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
                        goodsmodel.getisaddress([useridd])
                            .then(function (data) {
                                let isaddress=data;
                                console.log(isaddress);
                                if (isaddress==""){
                                    resp.redirect("/address");
                                } else {
                                    resp.render("goods/order",{shoporder:shoporder,totalorder:totalorder,isaddress:isaddress});
                                }
                            });

                    });
            });
    },
    //支付
    Pay2(req,resp){
        let orderno=req.query.orderno;
        let totalprice=req.query.totalprice;
        let paytype=req.query.paytype;
        let payform=req.query.payform;
        let defaultaddress=req.query.defaultaddress;
        let creattime=req.query.creattime;
        orderObj.orderno=orderno;
        orderObj.totalprice=totalprice;
        orderObj.paytype=paytype;
        orderObj.payform=payform;
        orderObj.defaultaddress=defaultaddress;
        orderObj.creattime=creattime;
        orderArry.push(orderObj);
        console.log(orderArry[0])
    },
    Pay(req,resp){
        let usertel=req.session.user;
        let totalof=req.query.totalof;
        dbpool.connect("INSERT INTO goodsorder VALUE(NULL,(SELECT u.u_id FROM users u WHERE u.tel=?),?,?,'0',?,?,?,?,'0','0','0','0',NULL,NULL,NULL,?,'1','0')",
            [usertel,orderArry[0].defaultaddress,orderArry[0].orderno,orderArry[0].totalprice,orderArry[0].totalprice,orderArry[0].paytype,orderArry[0].payform,orderArry[0].creattime],(err,data)=>{
                dbpool.connect("INSERT INTO order_goods(goods_ID,u_id,o_ID) SELECT DISTINCT sc.goods_ID,u.u_id,(SELECT o_ID FROM goodsorder ORDER BY createTime DESC LIMIT 1) FROM goods g,users u,shop_cart sc WHERE g.goods_ID=sc.goods_ID AND sc.u_id=u.u_id AND u.tel=?",
                    [usertel],(err,data)=>{
                        dbpool.connect("SELECT * FROM shop_cart sc,users u,goods g WHERE sc.u_id=u.u_id AND sc.goods_ID=g.goods_ID and u.tel=?",
                            [usertel],(err,data)=>{
                                let paygoods=data;
                                dbpool.connect("DELETE FROM shop_cart WHERE u_id=(SELECT u.u_id FROM users u WHERE u.tel=?)",
                                    [usertel],(err,data)=>{
                                        resp.render("goods/pay",{paysuccess:"支付成功",paygoods:paygoods,paytotalof:totalof});
                                        console.log(paygoods);
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
        let sql="INSERT INTO shop_cart VALUE(NULL,(SELECT u.u_id FROM users u WHERE u.tel='"+uname+"'),?,?,?,?) ON DUPLICATE KEY UPDATE goodsNum = goodsNum + 1";
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
    },
    //收藏
    goodscollection(req,resp){
        let usertel=req.session.user;
        dbpool.connect("INSERT INTO collection VALUE(NULL,?,?,?,(SELECT u.u_id FROM users u WHERE u.tel=?),?)",
            [glistArry[0].goodsimgList,glistArry[0].goodsnameList,glistArry[0].goodspriceList,usertel,glistArry[0].goodsIDList],(err,data)=>{
            console.log(data);
            resp.redirect("/collect")
            })
    },
    //优惠劵
    goodscoupon2(req,resp){
        let coupon=req.query.coupon;
        couponObj.coupon=coupon;
        couponArry.push(couponObj);
        console.log(couponArry[0].coupon)
    },
    goodscoupon(req,resp){
        let usertel=req.session.user;
        if (couponArry[0].coupon!=""){
            goodsmodel.getcoll(couponArry[0].coupon,usertel)
                .then(function (data) {
                    let colldata=data;
                    goodsmodel.getcart2([usertel])
                        .then(function (data) {
                            resp.redirect("/shop_cart");
                        });
                });
        } else {
            resp.redirect("/shop_cart");
        }
    }
};
module.exports=controller;