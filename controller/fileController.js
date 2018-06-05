const mysql=require("mysql");
const database=require("../config/dbConfig");
const dbpool=require("../config/dbpoolConfig");
const usermodel=require("../dao/userDao");
const controller={
    mytest(req,resp){
        resp.render("test",{username:"111"});
    }
};
module.exports=controller;