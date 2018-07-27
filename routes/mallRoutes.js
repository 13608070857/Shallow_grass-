const express=require("express");
const goodscontroller=require("../controller/goodsController");
const selfController = require("../controller/selfController");

const indexController = require("../controller/indexController");

const forumController = require("../controller/forumController");


const leaseController = require("../controller/leaseController");
const microController = require("../controller/microController");

const router=express.Router();//获取路由对象
//商品
router.get("/goods",goodscontroller.goodsList);
router.get("/goods.do",goodscontroller.goodsList2);
//商品详情
router.get("/goods_details",goodscontroller.goodsDetails);
router.get("/goods_details.do",goodscontroller.goodsDetails2);
//租赁
router.get("/lease",leaseController.leaseList);
//租赁详情
router.get("/lease_details",leaseController.lease_details);
//订单
router.get("/order",goodscontroller.Order);
//支付
router.get("/pay",goodscontroller.Pay);
router.get("/pay.do",goodscontroller.Pay2);
//购物车
router.get("/shop_cart",goodscontroller.shopCart);
//加入购物车
router.get("/addcart",goodscontroller.addshopCart);
//移除购物车商品
router.get("/delcartgoods",goodscontroller.delshopCart);
router.get("/delcartgoods.do",goodscontroller.delshopCart2);
//收藏
router.get("/collection",goodscontroller.goodscollection);
//优惠劵
router.get("/coupon",goodscontroller.goodscoupon);
router.get("/coupon.do",goodscontroller.goodscoupon2);

//个人中心
router.get("/self",selfController.self);
router.get("/selfE",selfController.selfE);
router.get("/address",selfController.address);
router.get("/collect",selfController.collect);
router.get("/orderG",selfController.orderG);
router.get("/coupons",selfController.coupons);
router.get("/afterSale",selfController.afterSale);
router.get("/help",selfController.help);
router.post("/saveInfo",selfController.saveInfo);
router.get("/saveInfo.do",selfController.saveOther);
router.get("/savePsw",selfController.savePsw);
router.get("/delAddress",selfController.delAddress);
router.get("/editAddress",selfController.editAddress);
router.get("/newAddress",selfController.newAddress);
router.get("/collectDel",selfController.collectDel);
router.get("/delOrder",selfController.delOrder);

//index
router.get("/index",indexController.index);
router.get("/login",indexController.login);
router.get("/register",indexController.register);
router.get("/Retrievepassword",indexController.Retrievepassword);
router.get("/rule",indexController.rule);
router.post("/login.do",indexController.logindo);
router.get("/yonghu.do",indexController.yonghu);
router.get("/login2.do",indexController.login2);
router.get("/phone.do",indexController.phone);
router.post("/duanxin.do",indexController.duanxin);
router.post("/zc.do",indexController.zc);
router.post("/jrsjk.do",indexController.jrsjk);
router.get("/xgsjh.do",indexController.xgsjh);
router.post("/xgmmdx.do",indexController.xgmmdx);
router.get("/xgmmyzm.do",indexController.xgmmyzm);
router.get("/xgmmjrsjk.do",indexController.xgmmjrsjk);


//论坛
router.get("/forumIndex",forumController.forumIndex);
router.get("/forumMain",forumController.forumMain);
router.get("/forumSelf",forumController.forumSelf);
//论坛删除个人帖子
router.get("/delet.do",forumController.forumDelete);

// 线上线下基地
router.get("/Micro_landscape",microController.landscape);
router.get("/underlineBase",microController.landscape2);


module.exports=router;//公开router