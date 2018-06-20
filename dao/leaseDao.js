const dbpool=require("../config/dbpoolConfig");
const leaseModel={
    //������
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
    lease_portfolio(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM lease_portfolio WHERE leaseID=1",
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