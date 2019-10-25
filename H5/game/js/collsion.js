//碰撞检测
//创建函数完成大鱼碰撞食物的检测
function momFruitsCollision(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            var len=calLength2(
                fruit.x[i],fruit.y[i],
                mom.x,mom.y
            );
            if(len<900){fruit.alive[i]=false;
            //加分数
            if(fruit.fruitType[i]=="blue"){
                var p=100;
            }else{var p=200;}
            data.scope+=p;
        }
        }
    }
}