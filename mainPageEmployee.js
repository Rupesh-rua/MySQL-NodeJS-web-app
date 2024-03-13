let logoutBtn=document.querySelector('#logout');
let sessionSalesBtn=document.querySelector('#salesInSession');
let totInvValueBtn=document.querySelector('#totalInventoryValue');
let ManagersSalBtn=document.querySelector('#salOfManagers');
let SalespersonsSalBtn=document.querySelector('#salOfSalespersons');

function logout(e){
	e.preventDefault();
	sessionStorage.removeItem('ID');
	location.href='./index.html';
}

function sessionSales(e){
	e.preventDefault();
	document.querySelector('#divSalesInSession').innerHTML=sessionStorage.getItem('cost');
}

function totalInventoryValue(e){
	e.preventDefault();
}

function ManagersSalary(e){
	e.preventDefault();
}

function SalespersonsSalary(e){
	e.preventDefault();
}

//EVENT LISTENERS
logoutBtn.addEventListener('click',logout);
sessionSalesBtn.addEventListener('click',sessionSales);
totInvValueBtn.addEventListener('click',totalInventoryValue);
ManagersSalBtn.addEventListener('click',ManagersSalary);
SalespersonsSalBtn.addEventListener('click',SalespersonsSalary);
