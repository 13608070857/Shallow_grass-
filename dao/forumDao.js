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
    },
    //获取所对应的帖子
    getForumRepInfo(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM post p,forum_category fc,rep_post rp,users u,forum_grade fg WHERE p.categoryId = fc.categoryId AND p.RestoreId=rp.RestoreId and p.u_Id=u.u_Id and u.for_user_gradeId=fg.user_gradeId and postId=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //获取个人等级
    selfGrade(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM users a,forum_grade b WHERE a.User_gradeid=b.User_gradeid AND u_id=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    xxm(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM users u,forum_grade fg WHERE u.for_user_gradeId=fg.user_gradeId AND u.u_id=(SELECT rp.u_id FROM post p,rep_post rp,users u WHERE p.RestoreId=rp.RestoreId AND p.u_Id=u.u_Id  AND postId=?)",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //获取发帖数量
    selfNum(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM post WHERE u_id=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    xxm1(A,B){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from post limit ?,?",
                [A,B],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //删除个人帖子
    selfDelete(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("DELETE FROM post WHERE postId=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
};
module.exports = forumModel;
