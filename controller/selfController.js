const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const usermodel = require("../dao/userDao");
const selfController = {
    //��������
    self(req,resp){
        resp.render("selfPublic/self",{username:"����"});
    }
};

module.exports = selfController;
