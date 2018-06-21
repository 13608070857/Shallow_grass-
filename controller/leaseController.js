const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const leasemodel=require("../dao/leaseDao");
const controller={
    //����
    leaseList(req,resp){
        leasemodel.leaseTitle()
            .then(function (data) {
                resp.render("lease/lease",{leaseTitle:data});
            });
        leasemodel.lease_portfolio()
            .then(function (data) {
                resp.render("lease/lease",{lease_portfolio:data});
            });
    },
    //����
    lease_details(req,resp){
        resp.render("lease/lease_details",{username:"����"});
    }
};
module.exports=controller;