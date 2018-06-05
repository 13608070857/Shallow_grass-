const express=require("express");
const controller=require("../controller/mallController");
const indexController = require("../controller/indexController");
const selfController = require("../controller/selfController");
const router=express.Router();//获取路由对象

//商城
router.get("/mall",controller.mymall);

//个人中心
router.get("/self",controller.self);

//首页
router.get("/index",indexcontroller.myindex);
module.exports=router;//公开router