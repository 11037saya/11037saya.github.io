var pi=Math.PI;
function loadStatics(statics,callback){
	var count=0;
	statics.forEach(function(path,index){
		var oImage=new Image();
		oImage.src=`statics/FishingMaster/img/${path}.png`;
		resources[path]=oImage;
		oImage.onload=function(){
			count++;
			if(count == statics.length){
				callback && callback();
			}
		};
	});
}
function rndSign(){return Math.random()> 0.5 ? 1 : -1}
function rnd(n,m){return parseInt(Math.random()*(m-n)+n)}