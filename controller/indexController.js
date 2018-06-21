const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const usermodel = require("../dao/goodsDao");
const indexController ={
    index(req,resp){
        resp.render("index/index",{user:req.session.user});
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
    logindo(req,resp){
        let username=req.body.username;
        let pwd=req.body.pwd;
        console.log(username)
        console.log(pwd)
        console.log(req.session)
        dbpool.connect("select * from uesrs where name=? and passowrd=?",
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