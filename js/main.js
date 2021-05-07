/*获取容器*/
var pics=document.getElementById("pics");
var n=1;
//设置时钟控件
setInterval(function(){
	if(n>=3) n=1
	pics.innerHTML="<img src='img/工大"+n+".jpg' />";
	n++;
},2000);
