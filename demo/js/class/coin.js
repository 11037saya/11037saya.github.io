class Coin{
	constructor(kind){
		this.kind=kind;
		this.x=0;
		this.y=0;
		this.count=0;
		this.move();
	}

	draw(){
		var {
			x,y,kind,count
		} =this;

		ctx.save();
			ctx.translate(x,y);
			ctx.drawImage(resources[`coinAni${kind}`],
				0,count%10*60,60,60,
				-30,-30,60,60
			);
		ctx.restore();
	}

	move(){
		this.timer1=setInterval(() => {
			this.count++;
		},30);

		setTimeout(() => {
			var count=0;
			var xPos=this.x;
			var yPos=this.y;

			this.timer2=setInterval(() => {
				this.x=xPos+(-100-xPos)*count/100;
				this.y=yPos+(700-yPos)*count/100;
				count++;
				if(count > 100){
					clearInterval(this.timer1);
					clearInterval(this.timer2);
				}
			},20);
		},500);
	}
}