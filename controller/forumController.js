const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const usermodel = require("../dao/userDao");
const forumController = {
    //个人中心
    forumIndex(req,resp){
        resp.render("forum/forumIndex",{username:"测试"});
    },
    forumMain(req,resp) {
        resp.render("forum/forumMain",{username:"测试"});
    },
    forumSelf(req,resp) {
        resp.render("forum/forumSelf",{username:"测试"});
    }
};

module.exports = forumController;
