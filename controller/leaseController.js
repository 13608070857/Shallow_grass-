const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const usermodel=require("../dao/userDao");
const controller={
    //×âÁŞ
    leaseList(req,resp){
        resp.render("lease/lease",{username:"²âÊÔ"});
    }
};
module.exports=controller;