/*-------------- express搭建服务器 ----------------*/
//模块引入
const express=require("express");//加载express资源
const logger=require("morgan");  //日志模块  npm install morgan --save
const favicon=require("serve-favicon");  //小图标  npm install serve-favicon --save
const route=require("./routes/mallRoutes");  //自定义模块引入
const session=require("express-session");
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser"); //post模块
const path=require("path"); //处理路径模块

//执行
const app=express();  //执行express全局函数，返回express
//使用
app.use(logger("dev"));  //调用日志，配置dev 开发模式
app.use(favicon(__dirname+"/public/img/favicon.ico")); //小图标
//------------session  cookie配置
app.use(cookieParser());
app.use(session({
    name:"demo",
    secret:"123123123",//密钥
    cookie:{maxAge:1000*60*60*24*30},//cookie有效时间30天，单位毫秒
    resave:true,//更新session-cookie的失效时间
    rolling:true,//更新保存
    saveUninitialized:true //未初始化的cookie要不要保存
}));
//post数据读取
app.use(bodyParser.urlencoded({limit:"50mb",extended:true,parameterLimit:5000}));//默认false
app.use(bodyParser.json({limit:"50mb"}));
app.use(route); //路由
//静态资源
app.use(express.static(__dirname+"/public"));  //静态资源路径
//404
app.use(function (req,resp) {
    //使用path模块  处理路径
    resp.sendFile(path.join(__dirname,"public","404.html"));
});
//-----------ejs配置----------
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
//设置端口号
app.set("port",8888);
//监听端口号
app.listen(8888,()=>{
    console.log("服务器启动");
});