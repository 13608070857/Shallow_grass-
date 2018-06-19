const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const usermodel = require("../dao/userDao");
const selfController = {
    //个人中心
    self(req,resp){
        resp.render("selfPublic/self",{username:"测试"});
    }
};

module.exports = selfController;
