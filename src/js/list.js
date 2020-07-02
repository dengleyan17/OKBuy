// 渲染创建商品列表
    class MainList{
        constructor(data){
            this.data = data;
            this.root = null;

        }
        init(){
            this.createUI();
            console.log(this)
        }
        createUI(){
            this.root = this.data.map((item,index)=>
                `<li class="gl-item over" commid="${item.comid}">
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
                        <a href="" title="${item.tit}">${item.tit}</a>
                    </p>
                    <p class="gl-price">
                        ￥<span class="okprice" id="${item.comid}">${item.price}</span>
                        <span class="oksale">(${item.discount}折)</span>
                        <span class="market-price">${item.costprice}</span>
                    </p>
                    <p class="gl-sale-info"></p>
                </div>
            </li> `
            ).join("");
            
            $(".mainlist").append(this.root);
        }
    }



