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
        console.log(cateid);
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
                                        resp.render("goods/goods_details",{goodsdetails:detailgoods,goodshot:hotgoods,goodscate:cateidgoods,goodsScore:goodsScore});
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
        resp.render("goods/shop_cart",{username:"测试"});
    }
};
module.exports=controller;