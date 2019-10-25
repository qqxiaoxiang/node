//海葵，50条，左右的摆动
//创建构造函数，添加方法来生成海葵
var aneObj=function(){
    //起点坐标x
    this.rootX=[];
    //终点坐标xy
    this.headX=[];
    this.headY=[];
    //添加摆动幅度
    this.amp=[];
    this.alpha=0;
};
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.rootX[i]=i*16+Math.random()*20;
        this.headX[i]=this.rootX[i];
        this.headY[i]=canHeight-350+Math.random()*50;
        this.amp[i]=20+Math.random()*20;
    }
    //console.log(this);
};
aneObj.prototype.draw=function(){
    ctx2.save();
    ctx2.strokeStyle="#3b154e";
    ctx2.lineWidth=20;
    ctx2.globalAlpha=0.5;
    ctx2.lineCap="round";
    this.alpha+=0.0008*36;
    var p=Math.sin(this.alpha);
    //console.log(p);
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        this.headX[i]=this.rootX[i]+this.amp[i]*p;
        ctx2.moveTo(this.rootX[i],canHeight);
        ctx2.quadraticCurveTo(this.rootX[i],canHeight-100,this.headX[i],this.headY[i]);
        
        ctx2.stroke();
    }
    ctx2.restore();
};