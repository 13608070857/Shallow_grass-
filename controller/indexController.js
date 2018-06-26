const mysql = require("mysql");
const AV=require("leancloud-storage")
var B=1
const App_ID="nD0BnwabqwF1T74dbmpUP4Ar-gzGzoHsz";
const App_Key="tlCbLyDK2tuVHDfhx6qe07mP";
AV.init({
    appId:App_ID,
    appKey:App_Key
})
const dbpool = require("../config/dbpoolConfig");
const indexDao = require("../dao/indexDao");
const indexController ={
    duanxin(req,resp){
        console.log(req.body.phone);
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber:req.body.phone,
            name:"铭铭科技",
            op:"注册",
            ttl:10
        }).then(function () {
            resp.send("发送成功")
        },function (err) {
            resp.send("发送失败")
        })
    },
    zc(req,resp){
        AV.Cloud.verifySmsCode(req.body.code,req.body.phone).then(function () {
            resp.send("验证成功")
        },function (err) {
            resp.send("验证失败")
        })
    },
    phone(req,resp){
        let phone=req.query.phone;
        indexDao.phone(phone)
            .then(function (data) {
                let Num=data.length;
                if(Num==0){
                    resp.send("未被注册")
                }else{
                    resp.send("已被注册")
                }

            })
    },
    jrsjk(req,resp){
        var A="浅草用户";
        B+=1
        var C=A+B;
        let phone=req.body.phone;
        let mm=req.body.mm;
        indexDao.jrsjk(phone,mm,C)
            .then(function (data) {
                resp.render("index/login",{username:"测试"});
            })
    },
    index(req,resp){
        // resp.render("index/index",{user:req.session.user});
        indexDao.product()
            .then(function (data) {
                let product=data
                    indexDao.homes()
                        .then(function (data) {
                            let homes=data
                resp.render("index/index",{user:req.session.user,product:product,homes:homes});
                });
            });
    },
    login(req,resp){
        resp.render("index/login",{username:"测试"});
    },
    register(req,resp){
        resp.render("index/register",{username:"测试"});
    },
    Retrievepassword(req,resp){
        resp.render("index/Retrievepassword",{username:"测试"});
    },
    rule(req,resp){
        resp.render("index/rule",{username:"测试"});
    },
    yonghu(req,resp){
        resp.send({user:req.session.user});
    },
    login2(req,resp){
        req.session.destroy();
        resp.render("index/index");
        console.log("1")
    },
    logindo(req,resp){
        let username=req.body.username;
        let pwd=req.body.pwd;
        console.log(username)
        console.log(pwd)
        console.log(req.session)
        dbpool.connect("select * from users where tel=? and password=?",
                [username,pwd],
            (error,data)=> {
                if(data!=undefined) {
                    if(data.length>0) {
                        req.session.user=username;
                        resp.redirect("/index");
                        console.log(req.session.user)
                    }else {
                        resp.send("登陆错误");
                    }
                }else {
                    resp.send("数据库报错" + error.message);
                }
            }
        );
    }

}
module.exports = indexController;