/*轮播图 功能： */
        /* (1) UI界面  div>ul>li*N  + 切换标签 + 焦点 */
        /* (2) 自动播放的功能。                */
        /* (3) 手动的点击切换显示上一张和下一张。 */
        /* (4) 支持手动点击焦点来实现切换。      */
        /* (5) 当鼠标移入到轮播图的时候，应该停止滚动，离开的时候恢复 */
        /* (6) 当切换显示的时候，焦点能同步切换 */
        /* (7) 应该能够支持复用。*/
class Slider{
    constructor(data){
        this.data = data;
        this.slider = null;
        this.sliderBox = null;
        this.sliderControl = null;
        this.sliderNav = null;
        this.timer = null;
        this.index = 0;
        this.len = this.data.length;
        this.sliderBoxItemWidth = 2000;
    }
    init(){
        this.createUI();
        this.autoPlayer();
        this.addEventHandlerWithSlider();
        this.addEventHandlerWithControl();
        this.addEventHandlerWithSliderNavItem();
    }
    createUI(){
        this.createSliderNav();
        this.createSliderBox();
        this.createSliderControl();

        this.slider = $("<div class='slider'></div>");
        this.slider.append(this.sliderBox);
        this.slider.append(this.sliderControl);
        this.slider.append(this.sliderNav);
        $(".imgbox").append(this.slider);
    }
    createSliderBox(){
        this.sliderBox = $("<ul class='slider-box'></ul>");
        this.sliderBox.html(this.data.map(item => `<li class="slider-box-item"><img src=${item}></li>`).join(""));
    }
    createSliderControl(){
        this.sliderControl = $("<div class='slider-control'></div>");
        this.sliderControl.html('<span class="prev">&lt;</span> <span class="next">&gt;</span>');
    }
    createSliderNav(){
        this.sliderNav = $("<ol class='slider-nav'></ol>");
        this.sliderNav.html(this.data.map((item, idx) => `<li class="slider-nav-item ${idx == 0 ? "active" : ""}"></li>
        `).join(""));
    }
    autoPlayer(){
        this.timer = setInterval(()=>{
            this.next();
            this.selectSliderNavItem(this.index);
        },2000);
    }
    addEventHandlerWithSlider(){
        this.slider.mouseenter(()=>{
            clearInterval(this.timer)});
        this.slider.mouseleave(()=>{
            this.autoPlayer()});
    }
    addEventHandlerWithControl(){
        let that = this;
        this.sliderControl.on("click","span",function(){
            if(this.className == "prev"){
                that.prev();
            }
            if(this.className == "next"){
                that.next();
            }
            that.selectSliderNavItem(that.index);
        })
    }
    prev(){
        this.index--;
        if(this.index == -1){
            this.index = this.len - 1;
        }
        this.sliderBox.css("left",-(this.index * this.sliderBoxItemWidth) + "px");

    }
    next(){
        this.index++;
        if(this.index == this.len){
            this.index = 0;
        }
        this.sliderBox.css("left",-(this.index * this.sliderBoxItemWidth) + "px");
    }
    addEventHandlerWithSliderNavItem(){
        let that = this;
        this.sliderNav.children().each((idx,item)=>{

            item.onclick = function(){
                that.selectSliderNavItem(idx);
                that.index = idx;

                that.sliderBox.css("left", -(that.index * that.sliderBoxItemWidth) + "px");
            }
        })
    }
    selectSliderNavItem(idx){
        this.sliderNav.children().eq(idx).addClass("active").siblings().removeClass("active");
    }

}


// 阻止文字选择
document.onselectstart = function(){return false};


// 渲染brand品牌栏
class Brand{
    constructor(data){
        this.data = data;
        this.root = null;
    }
    init(){
        this.createUI();
        console.log("1111");
        console.log(this.root);

        // this.addEventHandler();
    }
    createUI(){
        this.root = this.data.map((item,idx)=>
            `<a href=""><img src="${item.src}" alt=""></a>`
        ).join("");
        
        $(".brand-content").append(this.root);
    }
}


// 渲染首页商品列表
class IndexList{
    constructor(data){
        this.data = data;
        this.root = null;
    }
    init(){
        this.renderUI();
    }
    renderUI(){
        this.root = this.data.map((item,idx)=>`<li><a href="">
        <img src="${item.src}" alt="">
        <span class="tit1">${item.tit1}</span>
        <span class="tit2">${item.tit2}</span>
        <span class="tit3">${item.tit3}</span>
    </a></li>`
        ).join("");

        $("#indexList").append(this.root);
    }
}



// 渲染首页商品列表2
class IndexList2{
    constructor(data){
        this.data = data;
        this.root = null;
    }
    init(){
        this.renderUI();
    }
    renderUI(){
        this.root = this.data.map((item,idx)=>`<li><a href="">
        <img src="${item.src}" alt="">
        <p class="list3tit1">${item.tit}<span>${item.desc}</span></p>
    </a></li>`
        ).join("");

        $("#indexList2").append(this.root);
    }
}






// 抓取数据
// let Lis = document.querySelector("#indexhtml3").querySelectorAll("li");
// let arr = [];
// Lis.forEach(item=>{
//     let obj = {};
//     obj.src = item.querySelector("a img").src;
//     obj.tit = item.querySelector("a .list3tit1").innerText;
//     obj.desc = item.querySelector("a .list3tit1 span").innerText;
//     arr.push(obj)
// })