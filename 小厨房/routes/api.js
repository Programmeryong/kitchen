let mysql = require('../model/mysql');		// 相当于是加载数据库


exports.getDetails=function(req,res){
    mysql.getDetails(function(list){
        let json ={list:list};
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(json));
    })
}