$(function () {

    Vue.component('tab-菜谱1', {
        template: `
            <div>
                 <div class="foot_pic">
                     <div class="pic_box">
                          <img src="images/3.jpg" alt="">
                          <div class="dujia">独家</div>
                          <div class="pen">
                            <img src="images/smallpic/xiugai.png" alt=""/>
                          </div>
                     </div>
                     <div class="data_food">
                        <div class="food_name">
                            <label>炸鸡翅酱饭</label>
                        </div>
                        <div class="small_user">
                            <img src="images/users/user2.png" alt=""/>
                        </div>
                     </div>
                 </div>
            </div>
        `
    });
    Vue.component('tab-作品3', {
        template: `
                <div>
                    <div class="foot_pic">
                        <div class="pic_box">
                             <img src="images/3.jpg" alt="">
                             <div class="dujia">独家</div>
                             <div class="pen">
                               <img src="images/smallpic/xiugai.png" alt=""/>
                             </div>
                        </div>
                        <div class="data_food">
                           <div class="food_name">
                               <label>炸鸡翅酱饭</label>
                           </div>
                           <div class="small_user">
                               <img src="images/users/user2.png" alt=""/>
                           </div>
                        </div>
                     </div>
                     <div class="foot_pic">
                        <div class="pic_box">
                             <img src="images/3.jpg" alt="">
                             <div class="dujia">独家</div>
                             <div class="pen">
                               <img src="images/smallpic/xiugai.png" alt=""/>
                             </div>
                        </div>
                        <div class="data_food">
                           <div class="food_name">
                               <label>炸鸡翅酱饭</label>
                           </div>
                           <div class="small_user">
                               <img src="images/users/user2.png" alt=""/>
                           </div>
                        </div>
                     </div>
                     <div class="foot_pic">
                        <div class="pic_box">
                             <img src="images/3.jpg" alt="">
                             <div class="dujia">独家</div>
                             <div class="pen">
                               <img src="images/smallpic/xiugai.png" alt=""/>
                             </div>
                        </div>
                        <div class="data_food">
                           <div class="food_name">
                               <label>炸鸡翅酱饭</label>
                           </div>
                           <div class="small_user">
                               <img src="images/users/user2.png" alt=""/>
                           </div>
                        </div>
                     </div>
                </div>
        `
    });

    //页面我的数据
    let tab=new Vue({
        el: '#dynamic-component-demo',
        data: {
            currentTab: '菜谱1',
            tabs: ['菜谱1', '作品3']
        },
        computed: {
            currentTabComponent: function () {
                return 'tab-' + this.currentTab.toLowerCase()
            }
        }
    });

    //底部页面跳转
    let foot=new Vue({
        el:'#foot',
        methods:{
            jimp_html:function(message){
                location=message;
            },
        }
    })
    let top=new Vue({
        el:'#Top',
        methods:{
            jimp_html:function(message){
                location=message;
            },
            tuichu:function(){
              location='signin'
            }
        }
    })
})