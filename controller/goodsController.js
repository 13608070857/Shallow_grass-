const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const goodsmodel=require("../dao/goodsDao");
const controller={
    //商品
    goodsList(req,resp){
        goodsmodel.getAllgoods()
            .then(function (data) {
                resp.render("goods/goods",{mygoods:data});
            });
    },
    //商品详情
    goodsDetails(req,resp){
        let id=req.query.id;
        let cateid=req.query.cateid;
        let uid=req.session.user;
        // let goodsnum=req.query.goodsnum;
        // let goodsprice=req.query.goodsprice;
        // let totalprice=req.query.totalprice;
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
                                                                                // goodsmodel.addcart(["1","1","1","1","1"])
                                                                                //     .then(function (data) {
                                                                                //         let addshopcart=data;
                                                                                //         resp.render("goods/goods_details",{goodsdetails:detailgoods,goodshot:hotgoods,goodscate:cateidgoods,goodsScore:goodsScore,goodsComments:goodsComments,goodcom:goodcom,goodmed:goodmed,goodbad:goodbad,myuser:myuser,myuid:uid});
                                                                                //     });
                                                                                // goodsmodel.queryuser([uid])
                                                                                //     .then(function (data) {
                                                                                //         let users=data[0].u_id;
                                                                                //
                                                                                //     });
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
    }
};
module.exports=controller;