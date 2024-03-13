let submitBtn=document.querySelector('#refineForm');
let displayAllBtn=document.querySelector('#displayAll');
let refineSearchBtn=document.querySelector('#refineSearch');
let logoutBtn=document.querySelector('#logout');


itemsContainer=document.querySelector('#itemsContainer');
document.querySelector('#refineForm').hidden=true;

let jsObj;

function displayAll(e){
	e.preventDefault();
	document.querySelector('#refineForm').hidden=true;
	itemsContainer.hidden=false;
	let output='';
	fetch('/displayAll').then(res => res.json()
		).then(res => {
			jsObj=JSON.parse(res);
			//console.log(jsObj);
			for(let i=0; i<jsObj.length; i++){
				output += `<div class="ItemInfoDiv">
				<li>${jsObj[i].vin}<li>
				<div>${jsObj[i].manufacturer} ${jsObj[i].model}</div>
				<div>${jsObj[i].color} ${jsObj[i].type}</div>
				<div>year: ${jsObj[i].year} ${jsObj[i].miles} miles</div>
				<div>price: ${jsObj[i].price}</div>
				</div>
				<div class="cartDiv">
				<label>Add to cart</label>
				<input type="checkbox" class="cartCheckBox" name="${jsObj[i].vin}" value="${jsObj[i].vin}">
				<div><br><br>`
			}
			itemsContainer.innerHTML=output;
		}).catch(err => console.log(err.message));
}

function showRefineForm(e){
	e.preventDefault();
	itemsContainer.hidden=true;
	document.querySelector('#refineForm').hidden=false;
}

function refineFormFunc(e){
	e.preventDefault();
	itemsContainer.hidden=false;
	let output='';
	//let custformData=new FormData(custLoginForm);
	let refineFormData=new FormData(refineForm);
	let stringifiedFormData=JSON.stringify(Object.fromEntries(refineFormData));
	let formJSONobject=JSON.parse(stringifiedFormData);
	//console.log(formJSONobject.minMiles);
	fetch('/sendRefineFormData',{method:'POST',
		headers: {'Content-type': 'application/json'},
		body:stringifiedFormData
	})
	.then(res => res.json())
	.then(res => {
		jsObj=JSON.parse(res);
		//console.log(jsObj);
		for(let i=0; i<jsObj.length; i++){
			output += `<div class="ItemInfoDiv">
			<li>${jsObj[i].vin}<li>
			<div>${jsObj[i].manufacturer} ${jsObj[i].model}</div>
			<div>${jsObj[i].color} ${jsObj[i].type}</div>
			<div>year: ${jsObj[i].year} ${jsObj[i].miles} miles</div>
			<div>price: ${jsObj[i].price}</div>
			</div>
			<div class="cartDiv">
			<label>Add to cart</label>
			<input type="checkbox" class="cartCheckBox" name="${jsObj[i].vin}" value="${jsObj[i].vin}">
			<div><br><br>`
		}
		itemsContainer.innerHTML=output;
	})
	.catch(err => console.log("mainPageCustomer.js "+err));
}

function setUpCart(e){
	e.preventDefault();
	let trueCheckBoxes=[];
	//console.log(jsObj);
	let p1=new Promise((resolve,reject) => {
		let allCheckBoxesInPage=document.getElementsByClassName('cartCheckBox');
		for(let i=0; i<allCheckBoxesInPage.length; i++){
			if(allCheckBoxesInPage[i].checked==true){
				for(let l=0; l<jsObj.length; l++){
					if(jsObj[l].vin==allCheckBoxesInPage[i].value){
						trueCheckBoxes.push(jsObj[l]);
						break;
					}
				}
			}
		}
		resolve(trueCheckBoxes);
		});
	p1.then((data) => {
		console.log(data);
		sessionStorage.setItem('inTheCart',JSON.stringify(data));
		//console.log(sessionStorage.getItem('inTheCart'));
		location.assign("cart.html"); 
	}).catch((err) => console.log("some error"));
	
}

function logout(e){
	e.preventDefault();
	sessionStorage.remove('ID');
	location.href='./index.html';
}

//EVENT LISTENERS
displayAllBtn.addEventListener('click',displayAll);
refineSearchBtn.addEventListener('click',showRefineForm);
submitBtn.addEventListener('submit',refineFormFunc);
linkToCart.addEventListener('click',setUpCart);
logoutBtn.addEventListener('click',logout);