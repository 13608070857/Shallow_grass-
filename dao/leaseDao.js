const dbpool=require("../config/dbpoolConfig");
const leaseModel={
    //主标题
    leaseTitle(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM lease",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    leasePortfolio(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM lease_portfolio LEFT JOIN goods ON lease_portfolio.goods_ID=goods.goods_ID WHERE leaseID=1",
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
module.exports=leaseModel;