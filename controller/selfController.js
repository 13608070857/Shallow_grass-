const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const usermodel=require("../dao/userDao");

const controller = {
    self(req,resp){
        resp.render("selfPublic/self",{username:"111"});
    }
};

module.exports=controller;