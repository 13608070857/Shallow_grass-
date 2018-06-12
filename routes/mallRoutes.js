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
//评论详情
router.get("/commentsDetails",function (req,resp) {
    resp.render("mall/commentsDetails",{username:"测试"});
});

//个人中心
router.get("/self",selfController.self);

//首页
router.get("/index",indexController.myindex);
//登陆
router.get("/login",indexController.mylogin);
//注册
router.get("/register",indexController.myregister);
//活动
router.get("/activity",indexController.myactivity);
//找回密码
router.get("/Retrievepassword",indexController.myRetrievepassword);
//租赁
router.get("/lease",leaseController.mylease);
//规则
router.get("/rule",indexController.myrule);
//租赁商品详情
router.get("/leasemall",function (req,resp) {
    resp.render("lease/leasemall",{username:"111"});
});

//论坛
router.get("/forumIndex",forumController.forumIndex);
//论坛帖子
router.get("/forumMain",forumController.forumMain);
//论坛个人中心
router.get("/forumSelf",forumController.forumSelf);


module.exports=router;//公开router