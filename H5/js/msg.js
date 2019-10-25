//创建构造函数msg,功能保存弹幕相关数据与行为

var msgObj=function(){console.log(11);
    this.x=[];
    this.y=[];
    this.m=[];
    this.spd=[];
    this.font=[];
    this.color=[];
    this.alive=[];

};

msgObj.prototype.num=100;

msgObj.prototype.init=function(){console.log(22);
    for(var i=0;i<this.num;i++){
        this.x[i]=canWidth;
        this.y[i]=0;
        this.m[i]="";
        this.font[i]='12px';
        this.color[i]="#fff";
        this.spd[i]=3;
        this.alive[i]=false;
    }    
    console.log(this);
};

msgObj.prototype.draw=function(){//console.log(33)
    ctx.clearRect(0,0,canWidth,canHeight)
for(var i=0;i<this.num;i++){
    if(this.alive[i]){
        ctx.fillStyle=this.color[i];
        ctx.font=this.font[i]+" SimHei";
        var m=this.m[i];
        this.x[i]-=this.spd[i];
        
        ctx.fillText(m,this.x[i],this.y[i]);
        if(this.x[i]<0){this.alive[i]=false;this.x[i]=canWidth;}
    }
}
};
//  var obj=new msgObj();
//  obj.init();
//  obj.draw();
msgObj.prototype.add=function(obj){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]==false){this.alive[i]=true;
        this.y[i]=Math.random()*canHeight;
        this.spd[i]=1+Math.random()*10;
        this.font[i]=obj.font;
        this.color[i]=obj.color;
        this.m[i]=obj.msg;
        return;  
        }
    }
}
