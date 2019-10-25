//创建30个食物，其中15个隐藏，15个显示
//从海葵头顶出生，向上漂浮
var fruitObj=function(){
   // console.log('a')
   this.x=[];
   this.y=[];
    this.orange;
    this.blue;
    this.fruitType=[];
    this.spd=[];
    this.alive=[];
    this.aneNo=[];
    this.l=[];
};
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
    //console.log('b')
    //创建图片并且下载
    //循环遍历所有的食物
    this.blue=new Image();
    this.blue.src="src/blue.png";
    this.orange=new Image();
    this.orange.src="src/fruit.png";

    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.fruitType[i]="blue";
        this.l[i]=0;
        this.spd[i]=3;
    }
    
};
fruitObj.prototype.draw=function(){
//    console.log('c')
        for(var i=0;i<this.num;i++){
            if(this.alive[i]){
                if(this.fruitType[i]=="blue")
                {
                    var pic=this.blue;
                }else{
                    var pic=this.orange;
                }
                if(this.l[i]<14){this.l[i]+=this.spd[i]*10;}
                else{this.y[i]-=this.spd[i]*30;}
                ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
                if(this.y[i]<0){this.alive[i]=false;}
            }
        }  
};
function fruitMonitor(){
    var sum=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]) sum++;
    }
    if(sum<15){sendFruit();return;}
}
function sendFruit(){
    //按下标顺序挑
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]==false){
            fruit.born(i);
            return;
        }
    }
}

fruitObj.prototype.born=function(i){
    //修改当前下标i食物的状态，及其各个属性
    this.alive[i]=true;
    this.l[i]=0;
    this.fruitType[i]=Math.random()<0.9?"blue":"orange";
    var idx=Math.floor(Math.random()*ane.num);
    this.x[i]=ane.headX[idx];
    this.y[i]=ane.headY[idx];
    this.spd[i]=Math.random()*0.017+0.003;
}