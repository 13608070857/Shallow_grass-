const forumController = {
    forumIndex(req,resp){
        resp.render("forum/forumIndex",{username:"111"});
    }
};
module.exports = forumController;
