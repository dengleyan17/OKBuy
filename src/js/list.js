// 渲染创建商品列表
    // class MainList{
    //     constructor(data){
    //         this.data = data;
    //         this.root = null;

    //     }
    //     init(){
    //         this.createUI();
            
    //     }
    //     createUI(){
    //         this.root = this.data.map((item,index)=>
    //             `<li class="gl-item over" commid="${item.comid}">
    //             <div id="js-promotion-10999" commid="${item.comid}">
    //                 <div class="proright-icon"></div>
    //             </div>
    //             <div class="gl-wrap">
    //                 <div class="gl-img">
    //                     <a href="">
    //                         <img src="${item.src}" alt="" class="pdImg">
    //                         <img src="${item.src}" alt="" class="pdImgB">
    //                     </a>
    //                 </div>
    //                 <p class="gl-name">
    //                     <a href="" title="${item.tit}">${item.tit}</a>
    //                 </p>
    //                 <p class="gl-price">
    //                     ￥<span class="okprice" id="${item.comid}">${item.price}</span>
    //                     <span class="oksale">(<em>${item.discount}</em>折)</span>
    //                     <span class="market-price">${item.costprice}</span>
    //                 </p>
    //                 <p class="gl-sale-info"><a href="javascript:void(0)" style="color:#666"><span class="sale-tag">特价</span>耐克特惠专场</a></p>
    //             </div>
    //         </li> `
    //         ).join("");
            
    //         $(".mainlist").append(this.root);
    //     }
    // }

$(()=>{
// 1、发送网络请求获取服务器端的数据
    getDataAndRenderUI("default");

    // 获取数据渲染分页模块
    getPageCount();

    function getPageCount(){
        $.ajax({
            type: "get",
            url:"../api/getPageCount.php",
            success: function(response){
                let pageStr = "";
                for(let i=0;i<response;i++){
                    pageStr += `<a href="javascript:void(0)" class="${i == 0 ? 'current' : ''}">${i+1}</a>`
                }
                $(pageStr).insertBefore("#nextPage");
            }
        })
    }

    // 封装网络请求及渲染
    function getDataAndRenderUI(sort,page = 0){
        $.ajax({
            url: "../api/getList.php",
            data: {
                sort,
                page: page
            },
            dataType: "json",
        }).done(data => {
            

            let html = data.map(item => {
                return `<li class="gl-item over" commid="${item.comid}">
                <div id="js-promotion-10999" commid="${item.comid}">
                    <div class="proright-icon"></div>
                </div>
                <div class="gl-wrap">
                    <div class="gl-img">
                        <a href="">
                            <img src="${item.src}" alt="" class="pdImg">
                            <img src="${item.src}" alt="" class="pdImgB">
                        </a>
                    </div>
                    <p class="gl-name">
                        <a href="" title="${item.name}">${item.name}</a>
                    </p>
                    <p class="gl-price">
                        ￥<span class="okprice" id="${item.comid}">${item.price}</span>
                        <span class="oksale">(<em>${item.discount}</em>折)</span>
                        <span class="market-price">${item.costprice}</span>
                    </p>
                    <p class="gl-sale-info"><a href="javascript:void(0)" style="color:#666"><span class="sale-tag">特价</span>耐克特惠专场</a></p>
                </div>
            </li> `
            }).join("");
            $(".mainlist").html(html);
        })
    }
// 获取数据进行排序
    $(".pro-tab >a").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");

        let sortType = $(this).data().sort;

        getDataAndRenderUI(sortType);
    })



});