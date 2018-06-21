const dbpool=require("../config/dbpoolConfig");
const goodsModel={
    //��ȡ������Ʒ
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
    }
};
module.exports=goodsModel;