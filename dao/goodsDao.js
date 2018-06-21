const dbpool=require("../config/dbpoolConfig");
const goodsModel={
    //获取所有商品
    getAllgoods(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //商品详情
    getDetails(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    }
};
module.exports=goodsModel;