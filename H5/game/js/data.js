//负责分数计算与显示
var dataObj=function(){
    this.scope=0;
}
dataObj.prototype.draw=function(){
    //console.log(123);
    ctx1.save();
    ctx1.fillStyle="#fff";
    ctx1.font="30px SimHei"
    ctx1.fillText("SCORE:"+this.scope,canWidth*0.5,canHeight-100);
    ctx1.restore();
}