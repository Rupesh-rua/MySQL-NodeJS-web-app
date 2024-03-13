let model=require('./model.js');

function empLoginCheck(req,res){
	return new Promise((resolve,reject) => {
		let body='';
		req.on('data', (chunk) => body +=(chunk));
		req.on('end', () => {
			let promM=model.modEmpLoginCheck(JSON.parse(body));
			promM.then(data => resolve(`{"msg":"true","ID":${JSON.parse(body).eid}}`)
			).catch(err => reject("false"));
		});
	});
}

function custLoginCheck(req,res){
	return new Promise((resolve,reject) => {
		let body='';
		req.on('data', (chunk) => body +=(chunk));
		req.on('end', () => {
			let promM=model.modCustLoginCheck(JSON.parse(body));
			promM.then(data => resolve(`{"msg":"true","ID":${JSON.parse(body).cid}}`)
			).catch(err => {console.log(err.message);reject("false");});
		});
	});
}

function createAccount(req,res){
	return new Promise((resolve,reject) => {
		let body='';
		req.on('data', (chunk) => body +=(chunk));
		req.on('end', () => {
			let promM=model.modCreateAccount(JSON.parse(body));
			promM.then(data => resolve(data)
			).catch(err => reject(err));
		});
	});
}

function displayAll(){
	return new Promise((resolve,reject) => {
		let promM=model.modDisplayAll();
		promM.then(data => resolve(data)
		).catch(err => reject(err));
	});
}

function sendRefineFormData(req,res){
	return new Promise((resolve,reject) => {
		let body='';
		req.on('data', (chunk) => body +=(chunk));
		req.on('end', () => {
			let promM=model.modSendRefineFormData(JSON.parse(body));
			promM.then(data => resolve(data)
			).catch(err => reject(err));
		});
	});
}

module.exports.empLoginCheck=empLoginCheck;
module.exports.custLoginCheck=custLoginCheck;
module.exports.createAccount=createAccount;
module.exports.displayAll=displayAll;
module.exports.sendRefineFormData=sendRefineFormData;