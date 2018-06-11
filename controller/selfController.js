const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const usermodel=require("../dao/userDao");
const ejs = require("ejs");

const controller = {
    self(req,resp){
        resp.render("selfPublic/forum",{username:"111"});
    }
};

module.exports=controller;