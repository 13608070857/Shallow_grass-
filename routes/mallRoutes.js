const express=require("express");
const controller=require("../controller/mallController");
const indexController = require("../controller/indexController");
const selfController = require("../controller/selfController");
const leaseController = require("../controller/leaseController");
const forumController = require("../controller/forumController");
const router=express.Router();//获取路由对象

//商城
router.get("/mall",controller.mymall);

//商品详情
router.get("/mall_details",function (req,resp) {
    resp.render("mall/mall_details",{username:"测试"});
});
//商品购买
router.get("/buy",function (req,resp) {
    resp.render("mall/buy",{username:"测试"});
});
//支付
router.get("/pay",function (req,resp) {
    resp.render("mall/pay",{username:"测试"});
});
//购物车
router.get("/shop_cart",function (req,resp) {
    resp.render("mall/shop_cart",{username:"测试"});
});

//个人中心
router.get("/forum",selfController.self);

//首页
router.get("/index",indexController.myindex);

//租赁
router.get("/lease",leaseController.mylease);

//论坛
router.get("/forumIndex",forumController.forumIndex);

module.exports=router;//公开router