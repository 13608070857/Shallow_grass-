const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const usermodel=require("../dao/goodsDao");
const controller={
    //����
    leaseList(req,resp){
        resp.render("lease/lease",{username:"����"});
    },
    //����
    lease_details(req,resp){
        resp.render("lease/lease_details",{username:"����"});
    }
};
module.exports=controller;