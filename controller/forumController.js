const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const forumModel = require("../dao/forumDao");
var currentPage
const forumController = {
    //论坛首页
    forumIndex(req,resp){
        if(req.query.currentPage==undefined){
            currentPage=1
        }else {
            currentPage = req.query.currentPage;
        }
        var fy = 5;
        var fyNum;
        console.log(currentPage)
        var A=(currentPage-1)*5;
        console.log(A)
        var B=fy
        forumModel.getForumInfo()
            .then(function(data) {
                var remData = [];
                fyNum = data.length/fy;
                for(var i=0;i<data.length;i++) {
                    if(data[i].isRecommend == "yes") {
                        remData.push(data[i]);
                    }
                }
                forumModel.xxm1(A,B)
                    .then(function (data) {
                        console.log(data)
                        forumIndexData=data;
                        resp.render("forum/forumIndex",{
                            forumIndexData:forumIndexData,
                            forumRemInfoData:remData,
                            fyNum:fyNum,
                            currentPage:currentPage,
                            fy:fy,
                        });
                    })

            });
    },
    forumMain(req,resp) {
        var myId = req.url.split("=")[1];
        forumModel.getForumRepInfo(myId)
            .then(function(data) {
                var forumRepData=data
                    forumModel.xxm(myId)
                        .then(function (data) {
                            let xxm=data
                            console.log(xxm)
                            resp.render("forum/forumMain",{
                                forumRepData:forumRepData,
                                xxm:xxm
                        })

                    })

            })
    },
    forumSelf(req,resp) {
        let id=req.query.u_id;
        forumModel.selfGrade([id])
            .then(function (data) {
                let selfGradeData=data;
                forumModel.selfNum([id])
                    .then(function (data) {
                        let selNumData=data;
                        resp.render("forum/forumSelf",{selfGrade:selfGradeData,selfNum:selNumData})
                    })
            })
    },
    forumDelete(req,resp){
        let zhi=req.query.zhi;
        forumModel.selfDelete([zhi])
            .then(function(data) {
                resp.render("forum/forumSelf",{
                    selfDelete:data
                });
            })
    }
};

module.exports = forumController;
