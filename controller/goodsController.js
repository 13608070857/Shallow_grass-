const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const usermodel=require("../dao/userDao");
const controller={
    //��Ʒ
    goodsList(req,resp){
        resp.render("goods/goods",{username:"����"});
    },
    //��Ʒ����
    goodsDetails(req,resp){
        resp.render("goods/goods_details",{username:"����"});
    },
    //����
    Order(req,resp){
        resp.render("goods/order",{username:"����"});
    },
    //֧��
    Pay(req,resp){
        resp.render("goods/pay",{username:"����"});
    },
    //���ﳵ
    shopCart(req,resp){
        resp.render("goods/shop_cart",{username:"����"});
    }
};

module.exports=controller;