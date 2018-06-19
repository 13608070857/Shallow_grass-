const express=require("express");
const goodscontroller=require("../controller/goodsController");
const selfController = require("../controller/selfController");
const forumController = require("../controller/forumController");
const leaseController = require("../controller/forumController");
const router=express.Router();//获取路由对象
//商品
router.get("/goods",goodscontroller.goodsList);
//商品详情
router.get("/goods_details",goodscontroller.goodsDetails);
//租赁
router.get("/lease",leaseController,)

//订单
router.get("/order",goodscontroller.Order);
//支付
router.get("/pay",goodscontroller.Pay);
//购物车
router.get("/shop_cart",goodscontroller.shopCart);

//个人中心
router.get("/self",selfController.self);
router.get("/selfE",selfController.selfE);
router.get("/address",selfController.address);
router.get("/security",selfController.security);
router.get("/collect",selfController.collect);
router.get("/view",selfController.view);
router.get("/orderG",selfController.orderG);
router.get("/coupons",selfController.coupons);
router.get("/afterSale",selfController.afterSale);
router.get("/help",selfController.help);

//论坛
router.get("/forumIndex",forumController.forumIndex);
router.get("/forumMain",forumController.forumMain);
router.get("/forumSelf",forumController.forumSelf);

module.exports=router;//公开router