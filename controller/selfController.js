const mysql = require("mysql");
const selfModel = require("../dao/selfDao");
const selfController = {
    //个人中心
    self(req,resp){
        var username = req.session.user;
        selfModel.getUserInfo(username)
            .then(function(data) {
                resp.render("selfPublic/self",{selfData:data});
            });
    },


    //编辑个人中心
    selfE(req,resp) {
        var username = req.session.user;
        selfModel.getUserInfo(username)
            .then(function(data) {
                resp.render("selfPublic/selfE",{selfEData:data});
            });
    },

    //地址
    address(req,resp) {
        var username = req.session.user;
        selfModel.getUserAddress(username)
            .then(function(data) {
                resp.render("selfPublic/address",{addressData:data});
            });
    },

    //安全中心
    security(req,resp){
        var username = req.session.user;
        selfModel.getUserInfo(username)
            .then(function(data) {
                resp.render("selfPublic/security",{securityData:data});
            });
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
        var username = req.session.user;
        selfModel.getOrder(username)
            .then(function(data) {
                resp.render("selfPublic/orderG",{orderData:data});
            });
    },

    //优惠券
    coupons(req,resp) {
        var username = req.session.user;
        selfModel.getCouponsInfo(username)
            .then(function(data) {
                console.log(data);
                resp.render("selfPublic/coupons",{couponsData:data});
            });
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
