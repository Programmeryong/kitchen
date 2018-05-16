//加载数据库模块
let mysql =require('mysql');
let md5 = require("md5"); //加载md5的加密模块
//创建与数据库的连接
let connection =  mysql.createConnection({
    //数据库的设置
    host:"localhost", // 服务器地址
    user:"root",    // 用户名
    password:"root",  // 密码
    port:"3306",    // 数据库端口
    database:"kitchens"     // 需要连接的数据名
})

// 查用户名  登录验证
// exports.getnamepow = function(posttext,fun){
//     let sqlnamepow = 'select * from `kit_user` where user_phone ='+posttext.pho +'adn user_password ='+posttxt.pow;
//     // let sqlpow = 'select * from `kit_user` where user_password ='+posttext.pow;
//     console.log(sqlnamepow); 
//     connection.query(sqlnamepow, function(err, result){
//     if(err){
//       getname(posttext);
//     }
//     fun(result);  // 使用回调函数把结果通过参数的方法传出去
//   }); 
// }
// exports.getname = function(posttext,fun){
//     let sqlname = 'select * from `kit_user` where user_phone ='+posttext.pho;
//     connection.query(sqlname,function(err,result){
//         if(err){
//             return false;
//         }else{
//             return true;
//         }
//     })
// }
// 查询用户表的手机号码和密码
exports.getUser = function(pho, pow, fun){
  let sql = 'select * from `kit_user` where user_phone="'+pho+'" and user_password="'+pho+'"';
  // console.log(sql);
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);
  });  

}


// 注册页面  添加数据
exports.getregister = function(data,fun){
    let sql = 'insert into `kit_user` (user_phone , user_name , user_password , user_email) values (?,?,MD5("?"),?)';
    let thisgetregister = [data.userpho,data.username,data.userpow,data.useremail];
    console.log(sql);
    connection.query(sql,thisgetregister,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        fun(result);
    })
}


// 进行连接
connection.connect(function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log(' 数据库连接成功!');
});
