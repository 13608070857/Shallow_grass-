const indexroller={
    myindex(req,resp){
        resp.render("index",{username:""});
    },
    mylogin(req,resp){
        resp.render("login",{username:""});
    },
    myregister(req,resp){
        resp.render("register",{username:""});
    },
    myactivity(req,resp){
        resp.render("activity",{username:""});
    },
    myRetrievepassword(req,resp){
        resp.render("Retrievepassword",{username:""});
    }
};
module.exports=indexroller;