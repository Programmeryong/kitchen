let database=require('./dataBase');
// let vueResource=require("vue-resource");

exports.getGoodsList=function (req,res) {

    database.getGoodsList(function (list) {
        let json = {list:list};
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(json));
        // console.log(json);
    });
};

exports.getShoppingCartList=function (req,res) {

    database.getShoppingCartList(function (list) {
        let json = {list:list};
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(json));
        // console.log(json);
    });
};