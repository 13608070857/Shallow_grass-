const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const usermodel = require("../dao/userDao");
const forumController = {
    //��������
    forumIndex(req,resp){
        resp.render("forum/forumIndex",{username:"����"});
    },
    forumMain(req,resp) {
        resp.render("forum/forumMain",{username:"����"});
    },
    forumSelf(req,resp) {
        resp.render("forum/forumSelf",{username:"����"});
    }
};

module.exports = forumController;
