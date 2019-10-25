//大鱼,大鱼跟着鼠标移动，大鱼吃食物，长分数
//功能，外观

var momObj=function(){
//    console.log('a')
this.x;
this.y;
this.angle;
this.bigEye=[];
this.bigBody=[];
this.bigTail=[];

};
momObj.prototype.init=function(){
//    console.log('b')
//为大鱼x,y赋值屏幕中心
//为大鱼角度赋值0
//循环创建大鱼眼睛，身体，尾巴
this.x=canWidth*0.5;
this.y=canHeight*0.5;
this.angle=0;
for(var i=0;i<2;i++){
    this.bigEye[i]=new Image();
    this.bigEye[i].src="src/bigEye"+i+".png";
}
for(var i=0;i<8;i++){
    this.bigBody[i]=new Image();
    this.bigBody[i].src="src/bigSwim"+i+".png";
}
for(var i=0;i<8;i++){
    this.bigTail[i]=new Image();
    this.bigTail[i].src="src/bigTail"+i+".png";
}
};
momObj.prototype.draw=function(){
    //画大鱼
    this.x=mx;
    this.y=my;
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigBody[0],0,0);
    ctx1.drawImage(this.bigTail[0],0+39,0+6)
    ctx1.drawImage(this.bigEye[0],0+20,0+20);
    ctx1.restore();

    
}
