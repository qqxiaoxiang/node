
var c3;
var ctx;
var canWidth;
var canHeight;
var msg;

var inputMsg;
var inputFont;
var inputColor;
var inputBtn;

function game(){
     init();
     gameloop();
};

function init(){
   c3=document.getElementById('v3');
   ctx=c3.getContext("2d");
   canWidth=c3.width;
   canHeight=c3.height;
   msg=new msgObj();
   msg.init();
   //2.7
    inputMsg=document.getElementById('inputMsg');
    inputFont=document.getElementById("inputFont");
    inputColor=document.getElementById('inputColor');
    inputBtn=document.getElementById('inputBtn');
    inputBtn.addEventListener("click",handleMsg);
};

function gameloop(){
    requestAnimationFrame(gameloop);
    msg.draw()
};

document.body.onload=game;

function handleMsg(){
    //console.log(121);
    var f=inputFont.value;
    var c=inputColor.value;
    var m=inputMsg.value;
    //console.log(m+':'+f+":"+c);
    var obj={msg:m,
            font:f,
            color:c
    };
    msg.add(obj);
}


