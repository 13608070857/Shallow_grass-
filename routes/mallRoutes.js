const express=require("express");
const controller=require("../controller/mallController");
const indexController = require("../controller/indexController");
const selfController = require("../controller/selfController");
const leaseController = require("../controller/leaseController");
const router=express.Router();//获取路由对象

//商城
router.get("/mall",controller.mymall);

//个人中心
router.get("/self",selfController.self);

//首页
router.get("/index",indexController.myindex);

//租赁
router.get("/lease",leaseController.lease);

module.exports=router;//公开router