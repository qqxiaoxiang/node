//执行三秒钟的js代码

var start=new Date().getTime();
do{
    var end=new Date().getTime();
}while(end-start<3000);
postMessage("执行结束了，亲！")
onmessage=function(event){console.log(event.data);}
console.log(12);


// var str="执行结束";
// var msg=document.getElementById("msg");
// msg.innerHTML=str;
