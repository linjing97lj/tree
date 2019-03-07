let myTimer = null;
let currIndex = 0;	
//自动播放
function autoPlay(){
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//一、数据处理
		currIndex++;
		if(currIndex>=5){
			currIndex=0
		}
		//二、外观呈现
		//1、改图片
		let imgDoms = $("#picBox").children;
		for(let i=0;i<imgDoms.length-1;i++){
			imgDoms[i].style.zIndex =1;
		}
		imgDoms[currIndex].style.zIndex =2;
		//2、改豆豆
		let liDoms = $("#picLi").children;
		for(var i=0;i<liDoms.length;i++){
			liDoms[i].style.backgroundColor="black";
		}
		liDoms[currIndex].style.backgroundColor="blue";

	},1000)
}
	

//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
	myTimer = null;
}
//点豆豆跳转到对应的图片上
function goImg(index){
	//一、数据处理
	currIndex = index;

	if(currIndex>=4 || currIndex<0){
		currIndex=0;
	}
	//二、外观呈现
	//1、改图片
	let imgDoms = $("#picBox").children;
	for(let i=0;i<imgDoms.length-1;i++){
		imgDoms[i].style.zIndex = 1;
	}
	imgDoms[currIndex].style.zIndex = 2;
	//2、改豆豆
	let liDoms = $("#picLi").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].style.backgroundColor = "black";
	}
	liDoms[currIndex].style.backgroundColor = "blue";

}
window.onload = function(){
	//1、自动播放
	autoPlay();

	//2、鼠标进入停止播放
	$("#picBox").onmouseover = function(){
		stopPlay();
	}

	//3、鼠标离开继续播放播放
	$("#picBox").onmouseout = function(){
		autoPlay();
	}

	//4、点豆豆跳到对应的图片上
	$("#picLi").onclick = function(event){
		let evt = event || window.event;
		if(evt.target.tagName.toLowerCase()=="li"){
			goImg(evt.target.getAttribute("index"));
		}
	}
	//5、超链


}

function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	