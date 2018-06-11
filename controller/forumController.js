const forumController = {
    forumIndex(req,resp){
        resp.render("forumIndex",{username:"111"});
    }
};
module.exports = forumController;
