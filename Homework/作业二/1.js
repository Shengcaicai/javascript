

 function setName(obj) {
     obj.name = "nick";
     obj = new Object();
     obj.name = "grey";
 }

 var person  = new Object();
 setName(person);
 alert(person.name);   //nick;


 if(true){
    var color = "blue";
 }

 alert(color);    //"blue"

 for(var i = 0; i < 10; i++){
     dosomething(i);
 }

 alert(i);     // 10









 function compare(value1,value2){
     if(value1 < value2){
         return -1;
     }else if (value1 > value2){
         return 1;
     }else{
         return 0;
     }
 }

 var values = [0,1,5,20,15];
 values.sort(compare);
 alert(values);    // 0,1,5,15,204





 var colors = ["red","green","blue"];
 var removed = colors.splice(0,1);
 alert(colors);   //green,blue

 removed = colors.splice(1,0,"yellow","black");
 alert(colors);      //"green","yellow","black"，"blue"
 alert(removed);    //返回一个空数组


 remover = colors.splice(1,1,"red","purple");
 alert(colors);    //"green","red","purple","black"，"blue"
 alert(removed);    //返回的数字包含一项


 var values = [1,2,3,4,5];
 var sum = values.reduce(function (prev,cur,index,array) {
     return prev + cur;
 });

 alert(values);       //15


alert(sum(10,10));
function sum(num1,num2){
    return num1 + num2;
}





























