/**
 * Created by shengcai on 2017/2/28.
 */

function prepareGallery(){
    if(!document.getElementById)return false;
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById("imagegallery"))return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this)? false : true;

        }
    }
}

addLoadEvent(prepareGallery);


addLoadEvent(prepareGallery);


function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload !='function'){
        window.onload=func();
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}