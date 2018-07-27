const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const goodsmodel=require("../dao/goodsDao");
const controller={
    landscape(req,resp){
        resp.render("Micro_landscape/Micro_landscape",{"a":'a'});
    },
    landscape2(req,resp){
        resp.render("underlineBase/underlineBase",{"a":'a'});
    }
};
module.exports=controller;