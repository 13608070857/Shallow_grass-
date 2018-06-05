const express=require("express");
const controller=require("../controller/mallController");
const indexController = require("../controller/indexController");
const selfController = require("../controller/selfController");
const router=express.Router();//获取路由对象

//商城
router.get("/mall",controller.mymall);

//商品详情
router.get("/mall_details",function (req,resp) {
    resp.render("mall_details",{username:"1111"});
});

//个人中心
router.get("/self",selfController.self);

//首页
router.get("/index",indexController.myindex);
module.exports=router;//公开router