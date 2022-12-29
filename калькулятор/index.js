var zna; 
	  function func() {
	    var fto;
	    var num1 = Number(document.getElementById("num1").value);
	    var num2 = Number(document.getElementById("num2").value);
	    switch (zna) {
	      case '+':
	        fto = num1 + num2;
	        break;
	      case '-':
	        fto = num1 - num2;
	        break;
	      case '*':
	        fto = num1 * num2;
	        break;
	      case '/':
	        fto = num1 / num2;
	        break;
		  case 'C':
			fto = ' '
			num1 = ' '
			num2 = ' '
			break;
	    }
	    document.getElementById("fto").innerHTML = fto;
	}