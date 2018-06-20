const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const usermodel = require("../dao/goodsDao");
const selfController = {
    //∏ˆ»À÷––ƒ
    self(req,resp){
        resp.render("selfPublic/self",{username:"≤‚ ‘"});
    },
    selfE(req,resp) {
        resp.render("selfPublic/selfE",{username:"≤‚ ‘"});
    },
    address(req,resp) {
        resp.render("selfPublic/address",{username:"≤‚ ‘"});
    },
    security(req,resp){
        resp.render("selfPublic/security",{username:"≤‚ ‘"});
    },
    collect(req,resp) {
        resp.render("selfPublic/collect",{username:"≤‚ ‘"});
    },
    view(req,resp) {
        resp.render("selfPublic/view",{username:"≤‚ ‘"});
    },
    orderG(req,resp){
        resp.render("selfPublic/orderG",{username:"≤‚ ‘"});
    },
    coupons(req,resp) {
        resp.render("selfPublic/coupons",{username:"≤‚ ‘"});
    },
    afterSale(req,resp) {
        resp.render("selfPublic/afterSale",{username:"≤‚ ‘"});
    },
    help(req,resp) {
        resp.render("selfPublic/help",{username:"≤‚ ‘"});
    }
};

module.exports = selfController;
