const dbpool=require("../config/dbpoolConfig");
const selfModel = {
    //获取所有用户信息
    getUserInfo(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM uesrs where name = ?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
}
module.exports = selfModel;
