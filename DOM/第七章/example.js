/**
 * Created by shengcai on 2017/3/1.
 */

window.onload=function(){
    var para=document.createElement("p");
    var txt1=document.createTextNode("This is ");
    para.appendChild(txt1);
    var emphasic=document.createElement("em");
    var txt2=document.createTextNode("my ");
    emphasic.appendChild(txt2);
    para.appendChild(emphasic);
    var txt3=document.createTextNode("content.");
    para.appendChild(txt3);
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);
}
