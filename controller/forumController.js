const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const forumModel = require("../dao/forumDao");
const forumController = {
    //论坛首页
    forumIndex(req,resp){
        forumModel.getForumInfo()
            .then(function(data) {
                console.log(data);
                resp.render("forum/forumIndex",{forumIndexData:data});
            });
    },
    forumMain(req,resp) {
        resp.render("forum/forumMain",{username:"测试"});
    },
    forumSelf(req,resp) {
        resp.render("forum/forumSelf",{username:"测试"});
    }
};

module.exports = forumController;
