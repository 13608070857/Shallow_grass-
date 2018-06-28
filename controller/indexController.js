const mysql = require("mysql");
const AV=require("leancloud-storage")

const App_ID="nD0BnwabqwF1T74dbmpUP4Ar-gzGzoHsz";
const App_Key="tlCbLyDK2tuVHDfhx6qe07mP";
AV.init({
    appId:App_ID,
    appKey:App_Key
})
const dbpool = require("../config/dbpoolConfig");
const indexDao = require("../dao/indexDao");
const indexController ={
    // 获取验证码
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
    // 修改密码验证手机号
    xgsjh(req,resp){
        let phone=req.query.phone;
        indexDao.xgsjh(phone)
            .then(function (data) {
                // let Num=data.length;
                // console.log(Num)
                // if(Num==0){
                //     resp.send("没有此账号")
                // }else{
                //     resp.send("有账号")
                // }
                resp.send(data)
            })
    },
    // 修改（获取验证码）
    xgmmdx(req,resp){
        console.log("..............")
        console.log(req.body.phone);
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber:req.body.phone,
            name:"铭铭科技",
            op:"修改密码",
            ttl:10
        }).then(function () {
            resp.send("发送成功")
        },function (err) {
            resp.send("发送失败")
        })
    },
    // 注册 1.验证码是否正确
    zc(req,resp){
        AV.Cloud.verifySmsCode(req.body.code,req.body.phone).then(function () {
            resp.send("验证成功")
        },function (err) {
            resp.send("验证失败")
        })
    },
    // 修改密码 1.验证码是否正确
    xgmmyzm(req,resp){
        console.log(req.query.code)
        console.log(req.query.phone)
        AV.Cloud.verifySmsCode(req.query.code,req.query.phone).then(function () {
            resp.send("验证成功")
        },function (err) {
            resp.send("验证失败")
        })
    },
    // 手机号有没有被注册过
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
    // 注册2.保存到数据库
    jrsjk(req,resp){
        var B=""
        for(var i=0;i<7;i++){
            B+=Math.floor(Math.random()*10);
        }
        var A="浅草用户";
        var C=A+B;
        console.log(B)
        console.log(C)
        let phone=req.body.phone;
        let mm=req.body.mm;
        indexDao.jrsjk(phone,mm,C)
            .then(function (data) {
                resp.render("index/login",{username:"测试"});
            })
    },
    // 修改密码.保存到数据库
    xgmmjrsjk(req,resp){
        let phone=req.query.phone;
        let mm=req.query.mm;
        indexDao.xgmmjrsjk(phone,mm)
            .then(function (data) {
                resp.render("index/login",{username:"测试"});
            })
    },
    // 首页
    index(req,resp){
        indexDao.product()
            .then(function (data) {
                let product=data
                    indexDao.homes()
                        .then(function (data) {
                            let homes=data
                                indexDao.lt()
                                    .then(function (data) {
                                        let lt=data
                                        resp.render("index/index",{user:req.session.user,product:product,homes:homes,lt:lt});
                                    })

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
        // resp.render("index/index");
        resp.redirect("/index");
    },
    // 登陆
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