const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const goodsmodel=require("../dao/goodsDao");
var goodsArry=[];
var goodsObj={};
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
        resp.render("goods/order",{username:"测试"});
    },
    //支付
    Pay(req,resp){
        resp.render("goods/pay",{username:"测试"});
    },
    //购物车
    shopCart(req,resp){
        let userid=req.session.user;
        goodsmodel.getcart([userid])
            .then(function (data) {
                let shopCart=data;
                console.log(shopCart)
                resp.render("goods/shop_cart",{shopCart:shopCart});
            });
    },
    //加入购物车
    addshopCart(req,resp){
        let uname=req.session.user;
        dbpool.connect("INSERT INTO shop_cart VALUE(NULL,?,?,?,?,?)",
            ["2",goodsArry[0].goodsid,goodsArry[0].goodsnum,goodsArry[0].goodsprice,goodsArry[0].totalprice],(err,data)=>{
                resp.redirect("/shop_cart");
            })

        // goodsmodel.queryuser([uname])
        //     .then(function (data) {
        //         let usersid=data[0].u_id;
        //         console.log(usersid);
        //         goodsmodel.addcart(["1","1","1","9.9","9.9"])
        //             .then(function (data) {
        //                 // let addshopcart=data;
        //                 // console.log(addshopcart)
        //             });
        //     });
    }
};
module.exports=controller;