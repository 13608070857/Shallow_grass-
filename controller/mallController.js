const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const usermodel=require("../dao/userDao");
const controller={
    mymall(req,resp){
        resp.render("mall/mall",{username:"111"});
    }
};

module.exports=controller;