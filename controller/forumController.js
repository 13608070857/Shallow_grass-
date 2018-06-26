const mysql = require("mysql");
const dbpool = require("../config/dbpoolConfig");
const forumModel = require("../dao/forumDao");
const forumController = {
    //论坛首页
    forumIndex(req,resp){
        var fy = 5;
        var fyNum,initPage;
        var initEnter = 0;
        var currentPage = req.query.currentPage;
        var initNum = (Number(currentPage)-1)*fy;
        if(!isNaN(initNum)) {
            initPage = initNum;
            initEnter++;
        }
        var fyData = [];
        forumModel.getForumInfo()
            .then(function(data) {
                var remData = [];
                fyNum = data.length/fy;
                for(var i=0;i<data.length;i++) {
                    if(data[i].isRecommend == "yes") {
                        remData.push(data[i]);
                    }
                }
                for(var i=initPage;i<fy*currentPage;i++) {
                    fyData.push(data[i]);
                }
                resp.render("forum/forumIndex",{
                    forumIndexData:data,
                    forumRemInfoData:remData,
                    fyNum:fyNum,
                    currentPage:currentPage,
                    fy:fy,
                    fyData:fyData,
                    initEnter:initEnter
                });
            });
    },
    forumMain(req,resp) {
        var myId = req.url.split("=")[1];
        forumModel.getForumRepInfo(myId)
            .then(function(data) {
                resp.render("forum/forumMain",{
                    forumRepData:data
                });
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
    }
};

module.exports = forumController;
