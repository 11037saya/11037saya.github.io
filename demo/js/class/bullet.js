var BULLET_SIZE=[
	null,
	{x: 86, y: 0, w: 24, h: 26},
	{x: 62, y: 0, w: 25, h: 29},
	{x: 32, y: 35, w: 27, h: 31},
	{x: 30, y: 0, w: 31, h: 35},
	{x: 30, y: 82, w: 29, h: 33},
	{x: 0, y: 82, w: 30, h: 34},
	{x: 0, y: 0, w: 30, h: 44}
];

class Bullet{
	constructor(kind){
		this.x=431;
		this.y=570;
		this.rotate=0;
		this.kind=kind;
		this.speed=5;
		this.move();
	}

	draw(){
		var {
			rotate,kind
		} = this;

		var {
			x,y,w,h
		} = BULLET_SIZE[kind];

		ctx.save();
			ctx.translate(this.x,this.y);
			ctx.rotate(rotate);
			ctx.drawImage(resources.bullet,
				x,y,w,h,
				-w/2,-h/2,w,h
			);
		ctx.restore();
	}

	move(){
		var {
			speed
		} = this;
		this.timer=setInterval(() => {
			this.x+=Math.sin(this.rotate)*speed;
			this.y-=Math.cos(this.rotate)*speed;
		},16);
	}

	die(){
		clearInterval(this.timer);
	}
}