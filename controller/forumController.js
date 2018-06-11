const forumController = {
    forumIndex(req,resp){
        resp.render("forum/forumIndex",{username:"111"});
    },
    forumMain(req,resp) {
        resp.render("forum/forumMain",{username:"111"});
    }
};
module.exports = forumController;
