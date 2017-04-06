/**
 * Created by shengcai on 2017/2/28.
 */

// getElementById获取一个元素 getElementsByTagName获取一组元素 setAttribute改变属性值 getAttribute获取属性值
var paras=document.getElementById("p");
for(var i=0;i<paras.length;i++){
    var title_text=paras.getElementsByTagName("title");
    if(title_text){
        paras[i].setAttribute("title","this is a example");
        alert(paras[i].getAttribute("title"));
    }
}




