const dbpool=require("../config/dbpoolConfig");
const selfModel = {
    //获取所有用户信息
    getUserInfo(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM users where tel = ?",
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
            dbpool.connect("SELECT * FROM address AS a INNER JOIN users AS u ON a.u_id=u.u_id WHERE u.tel= ?",
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
    getOrder(params) {
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM users u,goodsorder o,goods g,address a WHERE u.o_ID = o.o_ID AND o.goods_ID = g.goods_ID AND o.addressId = a.addressId AND u.tel=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

    //获取优惠信息
    getCouponsInfo(params) {
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM users u,coupons c WHERE u.u_id=c.u_id AND u.tel=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

    //获取售后信息
    getsaleAfterInfo(params) {
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM users u,goodsorder o,goods g,address a,saleafter sf WHERE u.o_ID = o.o_ID AND o.goods_ID = g.goods_ID AND o.addressId = a.addressId AND sf.o_ID=o.o_ID AND u.tel=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

    //修改头像
    updateHeader(param1,param2) {
        return new Promise((resolve,reject)=>{
            console.log(param1,param2)
            dbpool.connect('UPDATE users SET userImg=? WHERE tel=?',
                [param1,param2],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

    //修改个人信息
    updateUserInfo(param1,param2,param3,param4,param5,param6) {
        return new Promise((resolve,reject)=>{
            dbpool.connect('UPDATE users SET name=?,sex=?,tel=?,email=?,User_show=? WHERE tel=?',
                [param1,param2,param3,param4,param5,param6],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

    //修改密码
    updataPsw(param1,param2) {
        return new Promise((resolve,reject)=>{
            dbpool.connect('UPDATE users SET password=? WHERE tel=?',
                [param1,param2],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },

    //删除地址
    delAddress(params) {
        return new Promise((resolve,reject)=>{
            dbpool.connect('delete from address where addressId=?',
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
