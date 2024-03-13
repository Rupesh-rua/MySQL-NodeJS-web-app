let submitBtn=document.querySelector('#custLoginForm');

function doIt(e){
	e.preventDefault();
	
	let custformData=new FormData(custLoginForm);
	let stringifiedFormData=JSON.stringify(Object.fromEntries(custformData));
	let formJSONobject=JSON.parse(stringifiedFormData);
	
	fetch('/custLoginCheck',{method:'POST',
				  headers: {'Content-type': 'application/json'},
				  body:stringifiedFormData
	})
	.then(res => res.text())
	.then(data => {
		console.log("in custLogin.js "+data);
		if(data=='true') {
			document.querySelector('#LoginMessage').innerHTML=`welcome back!`;
			sessionStorage.setItem('ID',stringifiedFormData);
			location.href='./mainPageCustomer.html';
		}
		if(data=='false') document.querySelector('#LoginMessage').innerHTML='No such user!';
	})
	.catch(err => console.log("in custLogin.js "+err));
}

submitBtn.addEventListener('submit',doIt);