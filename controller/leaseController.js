const leaseController={
    mylease(req,resp){
        resp.render("lease",{username:"111"});
    },
    myleasemall(req,resp){
        resp.render("lease/leasemall",{username:"111"});
    }
};
module.exports=leaseController;