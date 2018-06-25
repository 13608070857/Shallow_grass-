const dbpool=require("../config/dbpoolConfig");
const forumModel = {
    //获取帖子信息
    getForumInfo(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM post p,forum_category fc,rep_post rp WHERE p.categoryId = fc.categoryId AND p.RestoreId=rp.RestoreId order by postId",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    }
}
module.exports = forumModel;
