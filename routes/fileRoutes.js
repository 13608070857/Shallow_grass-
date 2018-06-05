const express=require("express");
const controller=require("../controller/fileController");
const router=express.Router();//获取路由对象
//测试
router.get("/test",controller.mytest);
module.exports=router;//公开router