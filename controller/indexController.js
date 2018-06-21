const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const usermodel = require("../dao/goodsDao");
const indexController ={
    index(req,resp){
        resp.render("index/index",{user:req.session.user});
    },
    login(req,resp){
        resp.render("index/login",{username:"娴嬭瘯"});
    },
    register(req,resp){
        resp.render("index/register",{username:"娴嬭瘯"});
    },
    Retrievepassword(req,resp){
        resp.render("index/Retrievepassword",{username:"娴嬭瘯"});
    },
    rule(req,resp){
        resp.render("index/rule",{username:"娴嬭瘯"});
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
                        resp.send("鐧婚檰閿欒");
                    }
                }else {
                    resp.send("鏁版嵁搴撴姤閿�" + error.message);
                }
            }
        );
    }

}
module.exports = indexController;