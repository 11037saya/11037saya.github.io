function getStyle(obj,name){
	return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
function move(obj,json,option){
	option =option || {};
	option.duration=option.duration || 700;
	option.easing=option.easing || 'ease-out';
	clearInterval(obj.timer);
	var start={};
	var dis={};
	for (var attr in json){
		start[attr]=parseFloat(getStyle(obj,attr));
		dis[attr]=json[attr]-start[attr];
	}
	var count=Math.floor(option.duration/30);
	var n=0;
	obj.timer=setInterval(function(){
		n++;
		for (var attr in json){
			switch (option.easing) {
				case 'linear':
					var a=n/count;
					var cur=start[attr]+dis[attr]*a;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[attr]+dis[attr]*Math.pow(a,3);
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[attr]+dis[attr]*(1-Math.pow(a,3));
					break;
			}
			if (attr == 'opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity='+cur*100+')';
			}else{
				obj.style[attr]=cur+'px';
			}
		}
		if(n == count){
			clearInterval(obj.timer);
			option.fnEnd && option.fnEnd();
		}
	},30);
}