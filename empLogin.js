let submitBtn=document.querySelector('#empLoginForm');

function doIt(e){
	e.preventDefault();
	
	let empformData=new FormData(empLoginForm);
	let stringifiedFormData=JSON.stringify(Object.fromEntries(empformData));
	let formJSONobject=JSON.parse(stringifiedFormData);
	
	fetch('/empLoginCheck',{method:'POST',
				  headers: {'Content-type': 'application/json'},
				  body:stringifiedFormData
	})
	.then(res => res.text())
	.then(data => {
		console.log("in empLogin.js "+data);
		if(data=='true') {
			document.querySelector('#LoginMessage').innerHTML=`welcome back!`;
			sessionStorage.setItem('ID',stringifiedFormData);
			location.href='./mainPageEmployee.html';
		}
		if(data=='false') document.querySelector('#LoginMessage').innerHTML='No such user!';
	})
	.catch(err => console.log("in empLogin.js "+err));
}

submitBtn.addEventListener('submit',doIt);