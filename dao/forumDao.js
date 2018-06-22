const dbpool=require("../config/dbpoolConfig");
const forumModel = {
    //获取帖子信息
    getForumInfo(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM post WHERE isRecommend='yes'",
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
