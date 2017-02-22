var FISH_SIZE=[
	null,
	{w: 55, h: 37, collR: 17},
	{w: 78, h: 64, collR: 24},
	{w: 72, h: 56, collR: 20},
	{w: 77, h: 59, collR: 22},
	{w: 107, h: 122, collR: 29}
];

class Fish{
	constructor(kind){
		this.x=0;
		this.y=0;

		this.rotate=0;
		this.speed=1;
		this.kind=kind;
		this.count=0;
		this.move();
	}

	draw(){
		var {
			kind,x,y,rotate,count
		}=this;
		var {
			w,h
		}=FISH_SIZE[kind];

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
		this.timer1 = setInterval(() => {
			this.count++;
			if(this.count ==4){
				this.count = 0;
			}
		},200);
		this.timer2 = setInterval(() => {
			this.x+=this.speed*Math.cos(this.rotate);
			this.y+=this.speed*Math.sin(this.rotate);
		},20);
	}

	isIn(x,y){
		var {
			collR
		} = FISH_SIZE[this.kind];
		var dis =Math.sqrt(
			Math.pow(this.x-x,2)+Math.pow(this.y-y,2)
		);
		return dis < collR;
	}

	die(){
		clearInterval(this.timer1);
		clearInterval(this.timer2);
	}
}