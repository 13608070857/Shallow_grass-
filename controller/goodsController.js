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
        console.log("开始");
        console.log();
        resp.render("goods/goods_details",{username:"测试"});
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