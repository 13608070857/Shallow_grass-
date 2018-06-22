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
                        leasemodel.leasePortfolio2()
                            .then(function (data) {
                                let leaseData2=data;
                                leasemodel.leasePortfolio2()
                                    .then(function (data) {
                                        let leaseData3=data;
                                        resp.render("lease/lease",{leaseTitle:titledata,leasePortfolio:leaseData,leasePortfolio2:leaseData2,leasePortfolio3:leaseData3});
                                    })

                            })

                    });
            });


    },
    //租赁
    lease_details(req,resp){
        let id=req.query.id;
        leasemodel.lease_details([id])
            .then(function (data) {
                let detailsData=data;
                leasemodel.lease_details2()
                    .then(function (data) {
                        let detailsData2=data;
                        resp.render("lease/lease_details",{lease_details:detailsData,lease_details2:detailsData2})
                    })
            });
    }
};
module.exports=controller;