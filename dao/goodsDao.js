const dbpool=require("../config/dbpoolConfig");
const goodsModel={
    //��ȡ������Ʒ
    getAllgoods(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods where inventory>='0'",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //��Ʒ����
    getGoodsDetail(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods g,goods_details gd,goods_category gc WHERE g.goods_ID=gd.goods_ID AND gc.cate_ID=g.cate_ID and g.goods_ID=? and g.inventory>='0'",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //������Ʒ
    getHotgoods(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods WHERE is_hot='1' and inventory>='0' limit 7",
                [],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //�����Ʒ
    getRelevant(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods WHERE cate_ID=? and inventory>='0'",
                [params],(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(data);
                }
                })
        })
    },
    //��Ʒ����
    getScore(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT g.goods_ID,gs.credibility,gs.service,gs.goodsdesc,gs.logistics FROM goods g,goods_score gs WHERE g.goods_ID=gs.goods_ID and g.goods_ID=? AND g.inventory>='0'",
                [params],(err,data)=>{
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