const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const usermodel = require("../dao/userDao");
const indexController ={
    index(req,resp){
        resp.render("index/index",{username:"≤‚ ‘"});
    },
    login(req,resp){
        resp.render("index/login",{username:"≤‚ ‘"});
    },
    register(req,resp){
        resp.render("index/register",{username:"≤‚ ‘"});
    },
    Retrievepassword(req,resp){
        resp.render("index/Retrievepassword",{username:"≤‚ ‘"});
    },
    rule(req,resp){
        resp.render("index/rule",{username:"≤‚ ‘"});
    }
}
module.exports = indexController;