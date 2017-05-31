/**
 * Created by shengcai on 2017/5/29.
 */

function startMove(obj,json,fn){
    var flag = true;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        flag = true;
        icur = null;
        for(var attr in json){
            //取当前属性值

            if(attr == 'opacity'){
                //当前透明度样式获取方法
                icur = Math.round(parseFloat(getStyle(obj,attr)) * 100);
            }else{
                //当前其他样式获取方法
                icur =  parseInt(getStyle(obj,attr));
            }

            //计算速度
            var speed = (json[attr] - icur ) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //检测停止
            //是否所有属性运动到达终点停止
            if( json[attr] != icur ) {
                flag = false;
            }
            //最终透明度样式获取方法
            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity:'+ (icur  + speed ) + ')';
                obj.style.opacity = (icur  + speed ) /100 ;
            }else{
                //获取样式的方法
                obj.style[attr]= icur  + speed + 'px';
            }
        }
        //最终所有属性运动到达终点停止
        if(flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    },30)
}


//获取样式
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}
