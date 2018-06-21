const dbpool=require("../config/dbpoolConfig");
const selfModel = {
    //获取所有用户信息
    getUserInfo(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM users where name = ?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

    //获取用户地址信息
    getUserAddress(params) {
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM address AS a INNER JOIN users AS u ON a.u_id=u.u_id WHERE u.name= ?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

    //获取订单信息
    //getOrder
}
module.exports = selfModel;
