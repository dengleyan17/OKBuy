$(()=>{
    /* 登录状态的处理 */
    /* 检查本地是否保存user_id和user_name的值，如果本地有，那么表示当前是登录状态 */
    /* 如果没有，那么表示当前是未登录的状态 */
    let userid = localStorage.getItem("id") || "";
    let username = localStorage.getItem("username") || "";


    if(userid && username){

        $.ajax({
            url: "../api/getCart.php",
            data: {userid},
            dataType: "json",
            success: function(response){
                renderUI(response);
            }
        })
        
    }else{
        location.href = "./login.html";
    }

    

    function renderUI(orderData){
        
        let html = orderData.map(data =>{
            return `<table>
            <tbody>
                <tr class="promotion">
                    <td class="promotion_1" width="110"></td>
                    <td colspan="5" class="promotion_2">
                        <span>特价</span>
                        耐克特惠专场
                    </td>                         
                </tr>
                <tr height="150" class="item">
                    <td width="110">
                        <span class="checkbox"></span>
                    </td>
                    <td width="470">
                                <a href="" title="${data.name}">
                                    <img src="${data.src}" alt="" title="${data.name}">
                                    <strong>${data.name}</strong>
                                    <br>
                                    <small>尺码：<i>${data.size}</i></small>
                                </a>
                            </td>
                    <td width="110" font-size="18px">
                        ￥${data.price}
                        <div class="OB_clearB"></div>
                    </td>
                    <td width="240">
                        <ul>
                            <li><span class="reduce">-</span></li>
                           <li><label for=""><input type="text" value="${data.num}" id="sum"></label></li>
                            <li><span class="add">+</span></li>
                        </ul>
                        <div class="OB_clearB"></div>
                    </td>
                    <td width="110"><span class="pr">￥<pr class="sum-price">${data.num * data.price}</pr></span><br></td>
                    <td class="operation" data-id="${data.comid}">
                        <span class="delete"><i>删除</i></span>
                    </td>
                </tr>
            </tbody>
        </table>`
        }).join("");
        $(".cartlistin").html(html);
    }

    /* 全选的功能：点击的时候切换选中的状态(改变自己的状态 + 改变所有其他复选框的状态) */
    $(".checkboxall,.all").click(function(){

        $(".checkboxall").toggleClass("allcur");
        
        $(".cartlistin").find("span[class=checkbox]").toggleClass("cur");

        computedTotal();
    })

    $(".cartlistin").on("click"," .checkbox",function(){
        $(this).toggleClass("cur");
        $(".checkboxall").removeClass("allcur");

        computedTotal();
    });

    /* 封装方法计算商品的总数和总价 */
    function computedTotal(){
        let ele = $(".item").filter(function(){
            return $(".item .checkbox").hasClass("cur") == true;
        });
        console.log(ele);
        // 计算数量
        let total = 0;
        let totalPrice = 0;
        

        ele.each(function(index,item){
            total += $(item).find("#sum").val() * 1;
            totalPrice += $(item).find(".sum-price").text().slice(1) * 1;
        })

        $("#total_num").text(total);
        $(".cart b").text(total);
        $("#total_price").text(totalPrice.toFixed(2));
    }

// 点击删除数据
    $(".cartlistin").on("click",".delete",function(){
        let res = confirm("确认删除商品吗？");

        if(res){
            let deleteId = $(this).parent().attr("data-id");
            console.log(deleteId)
            $.ajax({
                type: "get",
                url: "../api/dels.php",
                data: "id=" + deleteId,
                success: function(response){
                    console.log(response);
                    window.location.reload();
                }
            })
        }
    })


// 








})