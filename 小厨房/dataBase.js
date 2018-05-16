let mysql=require('mysql');

let connection = mysql.createConnection({
    // 数据库的设置
    host:"localhost", // 服务器地址
    user:"root",    // 用户名
    password:"root",  // 密码
    port:"3306",    // 服务器端口
    database:"kitchens"     // 需要连接的数据名
});

connection.connect(function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log(' 数据库连接成功!666');
});

exports.getGoodsList = function(fun){
    let sql = 'select * from commodity';
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            return ;
        }
        fun(result);  // 使用回调函数把结果通过参数的方法传出去
        // console.log(result);
    });
};

exports.getShoppingCartList=function (fun) {
    let sql = 'select * from goods_cart';
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            return ;
        }
        fun(result);  // 使用回调函数把结果通过参数的方法传出去
        // console.log('goods_cart:',result);
    });
};

exports.addShoppingCart=function (data,fun) {
    // let sql = 'insert into `article` ( title, content, c_time) values ("'+data.title+'", "'+data.content+'", "'+data.c_time+'")';
    let sql = 'insert into `goods_cart` ( com_name, com_price, com_img , com_number) values (?, ?, ?, ?)';
    // 设置SQL命令中的数据
    // for(let i=0;i<data.length;i++){
    //     console.log('database:',data);
    // }
    console.log(data);
    let params = [data.com_name, data.com_price, data.com_img, data.com_number];
    // console.log('params:',params);
    connection.query(sql, params, function(err, result){
        if(err){
            console.log(err);
            return ;
        }
        //console.log('INSERT ID:',result.insertId);
        fun(result);
    });
};