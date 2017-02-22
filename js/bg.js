;(function(){
	var oBg=document.querySelector('.bg3');
	oBg.style.position='absolute';
	oBg.width=oBg.offsetParent.offsetWidth;
	oBg.height=oBg.offsetParent.offsetHeight;
	oBg.offsetParent.style.backgroundColor='black';
	var ctx=oBg.getContext('2d');
	var amount=100;
	var distance=40;
	var dotArr=[];

	ctx.fillStyle='white';

	dotArr.push({
		r:0,
		x:0,
		y:0,
		sx:0,
		sy:0
	});

	for(var i=0;i<amount;i++){
		dotArr.push({
			r:rnd(1,4),
			x:rnd(0,oBg.width-10),
			y:rnd(0,oBg.height-10),
			sx:rndSign()*rnd(2,7)*0.2,
			sy:rndSign()*rnd(2,7)*0.2
		});
	}

	setInterval(function(){
		ctx.clearRect(0,0,oBg.width,oBg.height);

		dotArr.forEach(function(dot,index){
			ctx.beginPath();
			var {
				r,x,y,sx,sy
			} = dot;
			ctx.arc(x,y,r,0,2*Math.PI,false);
			dot.x+=sx;
			dot.y+=sy;
			if(dot.x > oBg.width-4 || dot.x < 0){
				dot.sx*=-1;
			}

			if(dot.y > oBg.height-4 || dot.y < 0){
				dot.sy*=-1;
			}
			ctx.fill();
		});
		dotArr.forEach(function(dot,index){
			for(var i=index+1;i<dotArr.length;i++){
				var dis =Math.sqrt(
					Math.pow(dot.x-dotArr[i].x,2)+
					Math.pow(dot.y-dotArr[i].y,2)
				);

				if(dis < distance){
					ctx.beginPath();
					ctx.moveTo(dot.x,dot.y);
					ctx.lineTo(dotArr[i].x,dotArr[i].y);
					ctx.strokeStyle=`rgba(255,255,255,${1-dis/distance})`;
					ctx.stroke();
				}
			}
		});
	},16);
	oBg.onmousemove=function({
		clientX,
		clientY
	}){
		dotArr[0].x=clientX;
		dotArr[0].y=clientY;
	};
})();