
var imgArray=["list1","list2","list3"];
var	lilist=document.getElementsByClassName("main")[0].getElementsByTagName("li");

function nextPic(){
	imgArray.unshift(imgArray[2]);//将最后一个元素添加到第一个
	imgArray.pop();//将最后一个元素删除
	for(var i in lilist){
		if(i-0+1) lilist[i].setAttribute("class",imgArray[i]);
	}
}
function prePic(){
		imgArray.push(imgArray[0]);//将第一个元素添加到最后一个元素
	imgArray.shift();//将第一个元素删除
	for(var i in lilist){
		if(i-0+1) lilist[i].setAttribute("class",imgArray[i]);
	}
}

//绑定事件
document.addEventListener("click",function(){
	var el=event.target.parentNode.parentNode;
	var el2=event.target.parentNode;

	if(el.getAttribute("Class")=="list2")
	{	
		if(el2.getAttribute("id")=="img1")
			 window.location="河图.html";
			// window.open('2.html','_blank');
		else if(el2.getAttribute("id")=="img2")
			 window.location="李志.html";
			// window.open('1.html','_blank');
		else if(el2.getAttribute("id")=="img3")
			 window.location="林俊杰.html";
			// window.open('3.html','_blank');
	}
	if(el.getAttribute("Class")=="list3")
		nextPic();
	else if(el.getAttribute("Class")=="list1")
		prePic();
})

timer=setInterval(nextPic,2000);//每个两秒往下翻页
document.getElementsByClassName("main")[0].onmouseover=function(){
	clearInterval(timer);
}
document.getElementsByClassName("main")[0].onmouseout=function(){
	timer=setInterval(nextPic,2000);//每个两秒往下翻页
}