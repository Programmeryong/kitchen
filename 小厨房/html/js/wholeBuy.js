$(function(){
    new Vue({
        el:'#myApp',
        data:{
            // state:false,
            // status:'其他2款',
            // wholeMoney:0,
            goods:[
                {
                    goods_name:'猪肋排/500g',
                    goods_describe:'密云农家|猪肋排机会获得科技就是你的发几个',
                    goods_price:58,
                    state:false,
                    status:'其他2款',
                },
                {
                    goods_name:'猪肋排/500g',
                    goods_describe:'密云农家|猪肋排机会获得科技就是你的发几个',
                    goods_price:68,
                    state:false,
                    status:'其他2款',
                }
            ],
            goods_cart:[
                // {
                //     goods_name:'猪肋排/500g',
                //     goods_describe:'密云农家|猪肋排机会获得科技就是你的发几个',
                //     goods_price:68,
                //     goods_number:1
                // },
            ],
        },
        methods:{
            fun:function (index) {
                this.goods[index].state=!this.goods[index].state;
                if(this.goods[index].state){
                    this.goods[index].status='收起'
                }else{
                    this.goods[index].status='其他2款';
                }
            },
            addgoods_cart:function (index) {
                let addgoods={};
                for(x in this.goods){
                    addgoods=this.goods[index];
                }
                addgoods.goods_number=1;
                this.goods_cart.push(addgoods);
                console.log(this.goods_cart);
            }
        },
        computed:{
            wholeMoney:function () {
                let money=0;
                let oneMoney=0;
                for(let i=0;i<this.goods_cart.length;i++){
                    oneMoney=this.goods_cart[i].goods_price*this.goods_cart[i].goods_number;
                    money+=oneMoney;
                }
                return money;
            },
            oneMoney:function () {
                
            }
        }
    });
});