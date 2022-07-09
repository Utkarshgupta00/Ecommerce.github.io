function bars(){
	var a = document.getElementById('navlinks');
	a.style.right = "0px";
	}
	function back(){
	var b = document.getElementById('navlinks');
	b.style.right = '-160px';
	}
	var bimage = document.getElementById('bimg');
	var simage = document.getElementsByClassName('simg');
	function sm1(){
	bimage.src = simage[0].src;
	}
	function sm2(){
	bimage.src = simage[1].src;
	}
	function sm3(){
	bimage.src = simage[2].src;
	}
	function sm4(){
	bimage.src = simage[3].src;
	}