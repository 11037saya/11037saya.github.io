;(function(){
	var oClock=document.querySelector('.clock canvas');
	var ctx=oClock.getContext('2d');
	ctx.lineWidth=6;
	ctx.lineCap='round';

	var rt=Math.PI/2;

	setInterval(() => {
		ctx.clearRect(0,0,oClock.width,oClock.height);
		var date=new Date();
		var hour=date.getHours()%12;
		var minute=date.getMinutes();
		var second=date.getSeconds();
		var millisecond=date.getMilliseconds();

		ctx.beginPath();
		ctx.arc(45,45,35,0-rt,
			2*Math.PI*(second+millisecond/1000)/60-rt,
		false);
		ctx.strokeStyle='#CE1049';
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(45,45,25,0-rt,
			2*Math.PI*(minute+second/60)/60-rt,
		false);
		ctx.strokeStyle='#7FF0EF';
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(45,45,15,0-rt,
			2*Math.PI*(hour+minute/60)/12-rt,
		false);
		ctx.strokeStyle='#A9FF0A';
		ctx.stroke();
	},16);
})();