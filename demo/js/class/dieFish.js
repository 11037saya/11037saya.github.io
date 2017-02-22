class DieFish{
	constructor(kind){
		this.kind=kind;
		this.x=0;
		this.y=0;
		this.rotate=0;
		this.count=4;
		this.move();
	}

	draw(){
		var {
			x,y,kind,rotate,count
		} = this;

		var {
			w,h
		} =FISH_SIZE[kind];

		ctx.save();
			ctx.translate(x,y);
			ctx.rotate(rotate);
			if(rotate>pi/2 && rotate<pi*3/2){
				ctx.scale(1,-1);
			}
			ctx.drawImage(resources[`fish${kind}`],
				0,count*h,w,h,
				-w/2,-h/2,w,h
			);
		ctx.restore();
	}

	move(){
		this.timer=setInterval(() => {
			this.count++;
			if(this.count == 8){
				this.count=4;
			}
		},200);
	}

	disappear(){
		clearInterval(this.timer);
	}
}