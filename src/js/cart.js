$(()=>{
    /* 登录状态的处理 */
    /* 检查本地是否保存user_id和user_name的值，如果本地有，那么表示当前是登录状态 */
    /* 如果没有，那么表示当前是未登录的状态 */
    let userid = localStorage.getItem("id") || "";
    let username = localStorage.getItem("username") || "";


    if(userid && username){

        console.log("1111");
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
                <tr height="150">
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
                           <li><label for=""><input type="text" value="${data.num}" ></label></li>
                            <li><span class="add">+</span></li>
                        </ul>
                        <div class="OB_clearB"></div>
                    </td>
                    <td width="110"><span class="pr">￥<pr>${data.num * data.price}</pr></span><br></td>
                    <td class="operation">
                        <span class="wish"><i>收藏</i></span>
                        <span class="delete"><i>删除</i></span>
                    </td>
                </tr>
            </tbody>
        </table>`
        }).join("");
        $(".cartlistin").html(html);
    }

    /* 全选的功能：点击的时候切换选中的状态(改变自己的状态 + 改变所有其他复选框的状态) */
    $(".all").click(function(){

    })
















})