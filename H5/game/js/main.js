//创建全局变量，函数，创建游戏对象方法，创建game方法，将main文件添加到index.html
//1.1创建七个全局变量
var c1;
var c2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;
var bgPic;

var ane;
var fruit;

var mom;

//全局变量，保存鼠标位置
var mx=0;
var my=0;

//创建全局变量保存分数
var data;



function game(){
    //console.log(1)
    init();
    gameloop();
};
function init(){
    //console.log(2)
    c1=document.getElementById("c1");
    c2=document.getElementById("c2");
    ctx1=c1.getContext("2d");
    ctx2=c2.getContext("2d");
    canWidth=c1.width;
    canHeight=c1.height;
    bgPic=new Image();
    bgPic.src="src/background.jpg";
    //console.log(c1,c2,ctx1,ctx2,canWidth,canHeight);
    ane=new aneObj;
    ane.init();
    fruit=new fruitObj();
    fruit.init();
    //大鱼
    mom=new momObj;
    mom.init();
    //为画布1绑定鼠标移动事件
    c1.addEventListener("mousemove",handleMove);
    data=new dataObj();
};
function gameloop(){
    //console.log(3);
    requestAnimationFrame(gameloop);
    ctx2.drawImage(bgPic,0,0);
    ane.draw();
    //碰撞检测函数
    momFruitsCollision();
    fruitMonitor();
    fruit.draw();
    //绘制大鱼
    //清除画布
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    data.draw();

};
document.body.onload=game;

//创建函数获得鼠标位置
function handleMove(event){
    mx=event.offsetX;
    my=event.offsetY;
    // console.log(mx+':'+my);

}