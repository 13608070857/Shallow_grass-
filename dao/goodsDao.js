const dbpool=require("../config/dbpoolConfig");
const goodsModel={
    //获取所有商品
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
    //商品详情
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
    //热卖商品
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
    //相关商品
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
    //商品评分
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
    },
    //商品评论
    getComments(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods g,user_comments uc,users u WHERE g.goods_ID=uc.goods_ID AND uc.u_id=u.u_id AND g.goods_ID=? AND g.inventory>='0' AND g.goods_ID IN (uc.goods_ID)",
                [params],(err,data)=>{
                if (!err){
                    resolve(data);
                } else {
                    reject(data);
                }
                })
        })
    },
    //好评
    getgood(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods g,user_comments uc,users u WHERE g.goods_ID=uc.goods_ID AND uc.u_id=u.u_id AND g.goods_ID=? AND g.inventory>='0' AND g.goods_ID IN (uc.goods_ID) AND uc.comType='1'",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //中评
    getmed(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods g,user_comments uc,users u WHERE g.goods_ID=uc.goods_ID AND uc.u_id=u.u_id AND g.goods_ID=? AND g.inventory>='0' AND g.goods_ID IN (uc.goods_ID) AND uc.comType='2'",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //差评
    getbad(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods g,user_comments uc,users u WHERE g.goods_ID=uc.goods_ID AND uc.u_id=u.u_id AND g.goods_ID=? AND g.inventory>='0' AND g.goods_ID IN (uc.goods_ID) AND uc.comType='3'",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //购物车
    getcart(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM shop_cart sc,users u,goods g WHERE sc.u_id=u.u_id AND sc.goods_ID=g.goods_ID and u.name=?",
                [params],(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    //购物车小计
    totalcart(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT SUM(sc.total_of) as totalcart  FROM shop_cart sc WHERE sc.u_id=(SELECT u.u_id FROM users u WHERE u.name=?)",
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