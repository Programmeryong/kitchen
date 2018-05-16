//加载各项需要的模块
// let express = require('express');
let url	= require('url');
let http = require('http');
let path = require('path');  //路径处理模块
let ejs = require("ejs"); //加载模板处理模块
let md5 = require("md5"); //加载md5的加密模块
let querystring = require('querystring');   // 加载用于提供字符串解释的功能

let cookieParser = require('cookie-parser');  // 加载COOKIE模块
let session = require('express-session');

let express = require("express");
let app = express();    //实例化一个Express对象

//加载数据模块   数据库
let mysql = require('./model/mysql');   // 相当于是加载数据库
// let User = require('./model/user');

// 设定port变量，意为访问端口
app.set('port', process.env.PORT || 8888);

//设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, '/html')));
//设定使用的模板的后缀名
app.set("view engine","html");
//运行模板的方法
app.engine("html",ejs.__express);

// //路由处理静态页面
// app.get("/",function (req,res) {
//     res.redirect("/index.html");
// });

app.get('/', function(req, res){
    res.render("index");	// 重定向
});
//渲染注册模板
app.get("/register",function (req,res) {
    res.render("register");
});
// 渲染登录页
app.get("/signin",function(req,res){
    res.render("signin");
});

// 注册页面功能
app.post('/register',function(req,res){
    let post = '';
    req.on('data',function(data){
        post += data;
        console.log(post);
    });
    req.on('end',function(){
        post = querystring.parse(post);
        mysql.getregister(post,function(result){
            if(result){
                console.log(result);
                res.redirect('/signin');
            }else{
                res.send('错误');
            }
        })
    })
});

// 为了使用SESSION需要对COOKIE进行设置
app.use(cookieParser("An"));
// 设置默认的session
app.use(session({
    secret:'an',
    rsave:false,
    saveUninitialized:true
}));


//路由
app.post('/signin',function (req,res) {
    // console.log(1,req.session);
    let post='';
    req.on('data',function (data) {
        //获取数据并且拼接
        post += data;
        // console.log(data);
    });
    req.on('end',function () {
        post=querystring.parse(post);
        //拿input表单拿数据
        // console.log(post);
        let username= post.pho;
        let password= md5(post.pow);  //MD5加密对比
        // console.log(username)
        console.log(password);
        mysql.getUser(username,password,function (result) {
            if(result.length < 0){
                console.log(123)
            }
            // 在SESSION中新建一个user的属性，并且赋值为刚刚得到的用户数据
            req.session.user=result[0];
            console.log(req.session);
            res.redirect('/index');
            // res.render('index');
        });
    });
});
// 验证
app.use(function (req,res,next) {
    // console.log(req.session.user);
    if(req.session.user){
        console.log(1);
        next();
    }else{
        console.log(2);
        // res.render('signin');
        res.redirect('/signin');
    }
});
//非法进入
app.get('/index', function(req, res) {
    if(!req.session.user){
        // res.render('signin');
        res.redirect('/signin');
    }else{
        let username = req.session.user.user_name;
        console.log(username);
        res.render('index',{username:'123'});
    }
});

// 渲染注册页
app.get("/register",function(req,res){
	res.render("register");
});
//渲染我的页面
app.get('/myCenter',function(req,res){
    let username = req.session.user.user_name;
    let pic = req.session.user.user_img;
    let sex = req.session.user.user_sex;
    if(sex==0){
        sex='女';
    }
    else{sex='男'}
    // let timer=req.session.user.user_time;//先不传的时间值
    let follow = req.session.user.user_follow;
    let fans=req.session.user.user_fans;
	res.render('myCenter',{username:username,pic:pic,sex:sex,follow:follow,fans:fans});
});
//渲染收藏模板
app.get("/collection",function (req,res) {
    res.render("collection");
});

//渲染市集模板
app.get("/fair",function (req,res) {
    res.render("fair");
});

//渲染邮箱模板
app.get("/mailbox",function (req,res) {
    res.render("mailbox");
});

//渲染个人中心模板
app.get("/myCenter",function (req,res) {
    res.render("myCenter");
});
//渲染菜谱分类模板
app.get("/foodclassify",function (req,res) {
    res.render("foodclassify");
});
//渲染分类列表模板
app.get("/classifylist",function (req,res) {
    res.render("classifylist");
});

//渲染添加厨友模板
app.get("/addChefs",function (req,res) {
    res.render("addChefs");
});

//渲染主题模板
app.get("/theme",function (req,res) {
    res.render("theme");
});

//渲染他人主页模板
app.get("/Othershomepage",function (req,res) {
    res.render("Othershomepage");
});

//渲染登录模板
app.get("/signin",function (req,res) {
    res.render("signin");
});



//渲染上传模板
app.get("/upload",function (req,res) {
    res.render("upload");
});

//渲染创建菜谱1模板
app.get("/setupfood1",function (req,res) {
    res.render("setupfood1");
});

//渲染创建菜谱2模板
app.get("/setupfood2",function (req,res) {
    res.render("setupfood2");
});

// 渲染加入菜单模板
app.get("/addMenu",function (req,res) {
    res.render("addMenu");
});

//渲染创建菜单模板
app.get("/createMenu",function (req,res) {
    res.render("createMenu");
});

//渲染分类详情模板
app.get("/classificationDetails",function (req,res) {
    res.render("classificationDetails");
});

//渲染菜谱详情模板
app.get("/menuDetails",function (req,res) {
    res.render("menuDetails");
});

//渲染支付成功模板
app.get("/paySuccess",function (req,res) {
    res.render("paySuccess");
});

//渲染菜篮子模板
app.get("/basket",function (req,res) {
    res.render("basket");
});

//渲染一键全购模板
app.get("/wholeBuy",function (req,res) {
    res.render("wholeBuy");
});
//渲染确认订单模板
app.get("/firmOrder",function (req,res) {
    res.render("firmOrder");
});
//渲染购物车模板
app.get("/shoppingCart",function (req,res) {
    res.render("shoppingCart");
});







app.listen(app.get('port'), function(){
    console.log('	服务已经开启，端口为：'+app.get('port'));
});