/**
 * Created by shengcai on 2017/3/1.
 */

window.onload=function(){
    var para=document.createElement("p");
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt=document.createTextNode("hello world");
    para.appendChild(txt);
}

