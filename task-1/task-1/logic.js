	var a;
	function open_eye(args) {
		if(a==1)
		{
			document.getElementById('password').type='password';
			 document.getElementById('open_eye').style.display = 'block';
			 document.getElementById('close_eye').style.display = 'none';
			a=0;
		}
		else
		{
			document.getElementById('password').type='text';
			 document.getElementById('close_eye').style.display = 'block';
			 document.getElementById('open_eye').style.display = 'none';
			a=1;
		}
	}
