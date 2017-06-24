/**
 * Created by yuanxing on 2017/6/24.
 * fixed
 */
//页面加载完成之后向服务器发信息请求返回商品信息的json。
$(function () {
    let pageNo = 1; //设定总共分成几页；
    let pageSize = 5;   //每页显示五条数据；
    //TODO bootstrap改变分页数；
    let url = "/ProductServlet";
    $.post(
        url,
        {"pageNo": pageNo, "pageSize": pageSize},
        function (result) {
            let productList = eval(result);
            // alert(productList.length);
            let contentNode = "";
            $.each(productList, function (i, product) {
                contentNode +=
                    "<tr>" +
                    "<td>" + product.id + "</td>" +
                    "<td>" + product.name + "</td>" +
                    "<td>" + product.count + "</td>" +
                    "<td>" + product.price + "</td>" +
                    "</tr>"
            });
            $("#product").append(contentNode);
        })
});
