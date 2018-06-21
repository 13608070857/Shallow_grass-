const mysql = require("mysql");
const selfModel = require("../dao/selfDao");
const selfController = {
    //个人中心
    self(req,resp){
        selfModel.getUserInfo("林家辉")
            .then(function(data) {
                console.log(data);
                resp.render("selfPublic/self",{selfData:data});
            });
    },


    //编辑个人中心
    selfE(req,resp) {
        selfModel.getUserInfo("林家辉")
            .then(function(data) {
                console.log(data);
                resp.render("selfPublic/selfE",{selfEData:data});
            });
    },

    //地址
    address(req,resp) {
        resp.render("selfPublic/address",{username:"测试"});
    },

    //安全中心
    security(req,resp){
        resp.render("selfPublic/security",{username:"测试"});
    },

    //收藏
    collect(req,resp) {
        resp.render("selfPublic/collect",{username:"测试"});
    },

    //足迹
    view(req,resp) {
        resp.render("selfPublic/view",{username:"测试"});
    },

    //订单信息
    orderG(req,resp){
        resp.render("selfPublic/orderG",{username:"测试"});
    },

    //优惠券
    coupons(req,resp) {
        resp.render("selfPublic/coupons",{username:"测试"});
    },

    //售后
    afterSale(req,resp) {
        resp.render("selfPublic/afterSale",{username:"测试"});
    },

    //帮助中心
    help(req,resp) {
        resp.render("selfPublic/help",{username:"测试"});
    }
};

module.exports = selfController;
