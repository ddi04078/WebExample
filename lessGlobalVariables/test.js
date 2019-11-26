//전역변수 1개(myApp) 만들고, 그 안에 그 객체의 소속된 변수들을 만들면 -> 전역변수를 사용하면서, 충돌을 막을 수 있다. 
//전역변수 1개를 만들고, 그 안에 내 프로그램에서 사용하는 전역변수를 넣는다. 


fuction myfunc(){
	var myApp = {}  

	myApp.calculator = {
		'left' : null,
		'right' : null
	}

	myApp.coordinate = {
		'left' : null,
		'right' : null
	}

	myApp.calculator.left = 10;
	myApp.calculator.right = 20;

	function sum(){
		return myApp.calculator.left + myApp.calculator.right;
	}

	document.write(sum());
}


