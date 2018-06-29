const mysql = require("mysql");
const selfModel = require("../dao/selfDao");
const fs = require("fs");
var count = 0;
const selfController = {
    //个人中心
    self(req,resp){
        var username = req.session.user;
        selfModel.getUserInfo(username)
            .then(function(data) {
                resp.render("selfPublic/self",{selfData:data});
            });
    },


    //编辑个人中心
    selfE(req,resp) {
        var username = req.session.user;
        selfModel.getUserInfo(username)
            .then(function(data) {
                resp.render("selfPublic/selfE",{selfEData:data});
            });
    },

    //地址
    address(req,resp) {
        var username = req.session.user;
        selfModel.getUserAddress(username)
            .then(function(data) {
                resp.render("selfPublic/address",{addressData:data});
            });
    },

    //收藏
    collect(req,resp) {
        var username = req.session.user;
        selfModel.getCollect(username)
            .then(function(data) {
                resp.render("selfPublic/collect",{collectData:data});
            });
    },

    //订单信息
    orderG(req,resp){
        var username = req.session.user;
        selfModel.getOrder(username)
            .then(function(data) {
                resp.render("selfPublic/orderG",{orderData:data});
            });
    },

    //优惠券
    coupons(req,resp) {
        var username = req.session.user;
        selfModel.getCouponsInfo(username)
            .then(function(data) {
                console.log(data);
                resp.render("selfPublic/coupons",{couponsData:data});
            });
    },

    //售后
    afterSale(req,resp) {
        var username = req.session.user;
        selfModel.getsaleAfterInfo(username)
            .then(function(data) {
                console.log(data);
                resp.render("selfPublic/afterSale",{saleafterData:data});
            });
    },

    //帮助中心
    help(req,resp) {
        resp.render("selfPublic/help",{username:"测试"});
    },

    //头像保存
    saveInfo(req,resp) {
        var username = req.session.user;
        count++;
        var imgUrl = req.body.imgUrl;
        console.log(imgUrl);
        var base64Data = imgUrl.replace("data:image/png;base64,","").replace(/s/g,"+");
        var dataBuffer = new Buffer(base64Data,"base64");
        var path = "img/qiancao" + count + ".png";
        fs.writeFile("public/"+path,dataBuffer,function(err) {
            if(err) {
                console.log(err);
            }else {
                selfModel.updateHeader(path,username)
                    .then(function(data) {
                        console.log();
                    })
            }
        })
    },

    //其他信息保存
    saveOther(req,resp) {
        var username = req.session.user;
        var u_name = req.query.u_name;
        var u_sex = req.query.u_sex;
        var u_tel = req.query.u_tel;
        var u_email = req.query.u_email;
        var u_show = req.query.u_show;
        selfModel.updateUserInfo(u_name,u_sex,u_tel,u_email,u_show,username)
            .then(function(data) {
                console.log(1);
            })
    },

    //保存密码
    savePsw(req,resp) {
        var username = req.session.user;
        var u_psw = req.query.u_psw;
        selfModel.updataPsw(u_psw,username)
            .then(function(data) {
                console.log(1);
            })
    },

    //删除地址
    delAddress(req,resp) {
        var addressId = Number(req.query.addressId);
        selfModel.delAddress(addressId)
            .then(function(data) {
                console.log(data);
            })
    },

    //修改地址
    editAddress(req,resp) {
        var addressId = Number(req.query.addressId);
        var zip_code = req.query.zip_code;
        var consignee = req.query.consignee;
        var tel = req.query.tel;
        var detailAddress = req.query.detailAddress;
        var isDefault = req.query.isDefault;
        selfModel.editAddress(consignee,tel,detailAddress,zip_code,isDefault,addressId)
            .then(function(data) {
                resp.redirect("/address");
            })
    },

    //新增地址
    newAddress(req,resp) {
        var username = req.session.user;
        var zip_code = req.query.zip_code;
        var consignee = req.query.consignee;
        var tel = req.query.tel;
        var detailAddress = req.query.detailAddress;
        var isDefault = req.query.isDefault;
        var createTime = req.query.createTime;
        selfModel.newAddress(consignee,tel,detailAddress,zip_code,isDefault,createTime,username)
            .then(function(data) {
                resp.redirect("/address");
            })
    },
};

module.exports = selfController;
