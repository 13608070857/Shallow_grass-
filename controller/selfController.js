const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const usermodel = require("../dao/userDao");
const selfController = {
    //¸öÈËÖĞĞÄ
    self(req,resp){
        resp.render("selfPublic/self",{username:"²âÊÔ"});
    },
    selfE(req,resp) {
        resp.render("selfPublic/selfE",{username:"²âÊÔ"});
    },
    address(req,resp) {
        resp.render("selfPublic/address",{username:"²âÊÔ"});
    },
    security(req,resp){
        resp.render("selfPublic/security",{username:"²âÊÔ"});
    },
    collect(req,resp) {
        resp.render("selfPublic/collect",{username:"²âÊÔ"});
    },
    view(req,resp) {
        resp.render("selfPublic/view",{username:"²âÊÔ"});
    },
    orderG(req,resp){
        resp.render("selfPublic/orderG",{username:"²âÊÔ"});
    },
    coupons(req,resp) {
        resp.render("selfPublic/coupons",{username:"²âÊÔ"});
    },
    afterSale(req,resp) {
        resp.render("selfPublic/afterSale",{username:"²âÊÔ"});
    },
    help(req,resp) {
        resp.render("selfPublic/help",{username:"²âÊÔ"});
    }
};

module.exports = selfController;
