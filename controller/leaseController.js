const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const leasemodel=require("../dao/leaseDao");
const controller={
    //×âÁÞ
    leaseList(req,resp){
        leasemodel.leaseTitle()
            .then(function (data) {
                let titledata=data;
                leasemodel.leasePortfolio()
                    .then(function (data) {
                        let leaseData=data;

                        resp.render("lease/lease",{leasePortfolio:leaseData,leaseTitle:titledata});
                    });
            });


    },
    //×âÁÞ
    lease_details(req,resp){
        resp.render("lease/lease_details",{username:"²âÊÔ"});
    }
};
module.exports=controller;