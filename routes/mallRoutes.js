const express=require("express");
const goodscontroller=require("../controller/goodsController");
const router=express.Router();//获取路由对象
//商品
router.get("/goods",goodscontroller.goodsList);
//商品详情
router.get("/goods_details",goodscontroller.goodsDetails);
//订单
router.get("/order",goodscontroller.Order);
//支付
router.get("/pay",goodscontroller.Pay);
//购物车
router.get("/shop_cart",goodscontroller.shopCart);
module.exports=router;//公开router