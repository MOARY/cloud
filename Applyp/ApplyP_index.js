window.onload=function(){
	var f=document.getElementById('fold');
	var uf=document.getElementById('unfold');
	var fc=document.getElementById('fold_content');
	var collapse_pic=document.getElementById('collapse_pic');
	var n=document.getElementById('name');
	// 点击收起展开手术信息（id=fold_content）
		f.onclick = function () {
			f.style.display="none";
			fc.style.display="none";
			uf.style.display="block";
		}
	
	
		uf.onclick=function(){
			uf.style.display="none";
			f.style.display="block";
			fc.style.display="block";
		}

	//点击包名实现切换包名左侧小三角
		document.getElementById('title').onclick=function(flag){
				if(collapse_pic.getAttribute("src",2)=="img/left.png"){
					collapse_pic.src="img/down.png";
				}
				else{
					collapse_pic.src="img/left.png";
				}
			
		}
	//点击改名可以直接在左侧改名
	// document.getElementById('reset_name').onclick=
	document.getElementById('reset_name').onclick=function(){
		var name=n.innerHTML;
		n.innerHTML="<input type='text' value='"+name+"'/>" ;
		document.getElementById('delet').style.display="none";
		document.getElementById('barcode').style.display="block";
	}
	
} 


