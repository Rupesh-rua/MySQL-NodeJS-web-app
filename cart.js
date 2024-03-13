let buyBtn=document.querySelector('#buy');



cartItems=JSON.parse(sessionStorage.getItem('inTheCart'));
let user=JSON.parse(sessionStorage.getItem('ID'));

let output='';
for(let i=0; i<cartItems.length; i++){
	output += `<div class="ItemInfoDiv">
	<li>${cartItems[i].vin}<li>
	<div>${cartItems[i].manufacturer} ${cartItems[i].model}</div>
	<div>${cartItems[i].color} ${cartItems[i].type}</div>
	<div>year: ${cartItems[i].year}</div>
	<div>Miles: ${cartItems[i].miles}</div>
	<div>Price: &#36 ${cartItems[i].price}</div>
	</div>
	<br><br>`
}

function bought(e){
	e.preventDefault();
	let cost=0;
	for(let i=0; i<cartItems.length;  i++){
		cost=cost+cartItems[i].price;
	}
	alert(`Your total cost= $${cost}`);
	document.querySelector('#cartItemsContainer').innerHTML='<h3>Thank you for shopping with us!</h3>';
	buyBtn.hidden=true;
	sessionStorage.removeItem('inTheCart');
	
}


document.querySelector('#cartItemsContainer').innerHTML=output;
document.querySelector('#specificUser').innerHTML=`Hello userID# ${user.cid}`;

buyBtn.addEventListener('click',bought);