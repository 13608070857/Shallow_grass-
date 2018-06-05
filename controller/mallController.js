const mysql=require("mysql");
const database=require("../config/dbConfig");
const dbpool=require("../config/dbpoolConfig");
const usermodel=require("../dao/userDao");
const controller={
    mymall(req,resp){
        resp.render("mall",{username:"111"});
    }
};
module.exports=controller;