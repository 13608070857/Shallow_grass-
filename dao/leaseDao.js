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
    },
    leasePortfolio2(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM lease_portfolio LEFT JOIN goods ON lease_portfolio.goods_ID=goods.goods_ID WHERE leaseID=2",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    leasePortfolio3(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM lease_portfolio LEFT JOIN goods ON lease_portfolio.goods_ID=goods.goods_ID WHERE leaseID=3",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    lease_details(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM lease_details a,lease_portfolio b,goods c WHERE a.ID=b.leaseID AND b.goods_ID=c.goods_ID AND ID=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    lease_details2(){
        return new Promise((resolve,reject)=> {
            dbpool.connect("SELECT * FROM lease_details a,lease_portfolio b,goods c,goods_details d WHERE a.ID=b.leaseID AND b.goods_ID=c.goods_ID AND c.goods_ID=d.goods_ID",
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