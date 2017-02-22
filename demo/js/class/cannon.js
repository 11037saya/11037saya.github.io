var CANNON_SIZE=[
	null,
	{w: 74, h: 74},
	{w: 74, h: 76},
	{w: 74, h: 76},
	{w: 74, h: 83},
	{w: 74, h: 85},
	{w: 74, h: 90},
	{w: 74, h: 94}
];

class Cannon{
	constructor(kind){
		this.kind=kind;
		this.x=431;
		this.y=570;
		this.rotate=0;
		this.count=0;
		this.timer=null;
	}

	draw(){
		var {
			kind,x,y,rotate,count
		}=this;
		var {
			w,h
		}=CANNON_SIZE[kind];

		ctx.save();
			ctx.translate(x,y);
			ctx.rotate(rotate);
			ctx.drawImage(resources[`cannon${kind}`],
				0,count*h,w,h,
				-w/2,-h/2,w,h
			);
		ctx.restore();
	}

	emit(){
		new Audio('statics/FishingMaster/sound/cannon.mp3').play();
		clearInterval(this.timer);

		this.timer=setInterval(() => {
			this.count++;
			if(this.count == 5){
				this.count = 0;
				clearInterval(this.timer);
			}
		},60)
	}
}