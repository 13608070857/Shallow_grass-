const mysql=require("mysql");
const dbpool=require("../config/dbpoolConfig");
const leasemodel=require("../dao/leaseDao");
const controller={
    //租赁
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
    //租赁
    lease_details(req,resp){
        resp.render("lease/lease_details",{username:"测试"});
    }
};
module.exports=controller;