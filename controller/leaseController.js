const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const usermodel=require("../dao/userDao");
const controller={
    //����
    leaseList(req,resp){
        resp.render("lease/lease",{username:"����"});
    }
};
module.exports=controller;