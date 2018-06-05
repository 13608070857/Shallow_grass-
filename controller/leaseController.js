const leaseController={
    mylease(req,resp){
        resp.render("lease",{username:"111"});
    }
};
module.exports=leaseController;