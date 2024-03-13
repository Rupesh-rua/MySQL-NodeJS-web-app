let submitBtn=document.querySelector('#newAccountForm');

function doIt(e){
	e.preventDefault();
	let cid=Math.floor(Math.random() * 100000)+1;
	
	let newAccountformData = new FormData(newAccountForm);
	newAccountformData.append("cid",cid);
	let stringifiedFormData = JSON.stringify(Object.fromEntries(newAccountformData));
	//let formJSONobject = JSON.parse(stringifiedFormData);
	//console.log(formJSONobject.fName);
	
	fetch('/createAccount',{method:'POST',
				  headers: {'Content-type': 'application/json'},
				  body:stringifiedFormData
	})
	.then(res => res.text())
	.then(data => {
		console.log("in createAccount.js "+data);
		document.querySelector('#CreateMessage').innerHTML=`Account created successfully! Your ID is ${cid}. Please remember your password.`;
	})
	.catch(err => console.log("in custLogin.js "+err));
}

submitBtn.addEventListener('submit',doIt);