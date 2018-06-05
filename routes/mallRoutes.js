const express=require("express");
const controller=require("../controller/mallController");
const router=express.Router();//获取路由对象
//测试
router.get("/mall",controller.mymall);
module.exports=router;//公开router