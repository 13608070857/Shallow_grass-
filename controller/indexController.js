const indexroller={
    myindex(req,resp){
        resp.render("index",{username:"111"});
    }
};
module.exports=indexroller;