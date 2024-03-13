const mysql=require('mysql2');

//-----------------EMPLOYEE LOGIN CHECK--------------------------------------------------------
function modEmpLoginCheck(JSONobj){
	return new Promise((thisres,thisrej) => {
		let isID = "false";
		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "De5s9@for",
			database: "project_test"
		});
		
		let sql="SELECT eid, password, firstName, lastName FROM employee;";
		
		con.connect(err => {
			if(err) throw err;
		});
		
		let p1= new Promise((resolve,reject) => {
			con.query(sql, function (err, result, fields) {
				if(err) {reject(err.message)}
				else resolve(result)
			});
		});
		p1.then(result => {
			for(let i=0; i<result.length; i++){
				if(JSONobj.eid==result[i].eid && JSONobj.ePwd==result[i].password){
					isID="true";
					break;
				}
			}
			con.end();
			if(isID=="true") thisres("true")
			else thisrej("false")
		}).catch(err => console.log(err));
	});
}
//-----------------CUSTOMER LOGIN CHECK--------------------------------------------------------
function modCustLoginCheck(JSONobj){
	return new Promise((thisres,thisrej) => {
		let isID = "false";
		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "De5s9@for",
			database: "project_test"
		});
		
		let sql="SELECT cid, password, firstName, lastName FROM customer;";
		
		con.connect(err => {
			if(err) throw err;
		});
		
		let p1= new Promise((resolve,reject) => {
			con.query(sql, function (err, result, fields) {
				if(err) {reject(err.message)}
				else resolve(result)
			});
		});
		p1.then(result => {
			//console.log(result);
			for(let i=0; i<result.length; i++){
				//console.log(JSONobj.ePwd,result[i].password);
				if(JSONobj.cid==result[i].cid && JSONobj.cPwd==result[i].password){
					isID="true";
					break;
				}
			}
			con.end();
			if(isID=="true") thisres("true")
			else thisrej("false")
		}).catch(err => console.log(err));
	});
}
//-----------------CREATE ACCOUNT--------------------------------------------------------
function modCreateAccount(JSONobj){
	return new Promise((thisres,thisrej) => {
		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "De5s9@for",
			database: "project_test"
		});
		console.log(JSON.stringify(JSONobj));
		let sql=`INSERT INTO customer (cid,password,firstName,lastName) VALUES ('${JSONobj.cid}','${JSONobj.cPwd}','${JSONobj.fName}','${JSONobj.lName}')`;
		console.log(sql);
		
		con.connect(err => {
			if(err) throw err;
		});
		
		let p1= new Promise((resolve,reject) => {
			con.query(sql, function (err, result, fields) {
				if(err) reject(err.message+"in sql")
				else {resolve("true");}
			});
		});
		p1.then(result => {
			console.log(result);
			con.end();
			if(result=="true") thisres("true")
		}).catch(err => thisrej(err));
	});	
}
//-----------------DISPLAY ALL----------------------------------------------------------------
function modDisplayAll(){
	return new Promise((thisres,thisrej) => {
		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "De5s9@for",
			database: "project_test"
		});
		let sql="SELECT * FROM cars2;";
		//console.log(sql);
		
		con.connect(err => {
			if(err) throw err;
		});
		
		let p1= new Promise((resolve,reject) => {
			con.query(sql, function (err, result, fields) {
				if(err) reject(err.message+"in sql")
				else {resolve(result);}
			});
		});
		p1.then(result => {
			console.log("result");
			con.end();
			thisres(JSON.stringify(result));
		}).catch(err => thisrej(err));
	});	
}
//-----------------DISPLAY REFINE--------------------------------------------------------
function modSendRefineFormData(JSONobj){
	return new Promise((thisres,thisrej) => {
		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "De5s9@for",
			database: "project_test"
		});
		
		let sql=`SELECT * FROM cars2 WHERE color='${JSONobj.color}' AND year > '${parseInt(JSONobj.latestYear)}' AND ((miles < ${parseInt(JSONobj.maxMiles)}) AND (miles>${parseInt(JSONobj.minMiles)}));`;
		
		//let sql=`SELECT * FROM cars2 WHERE color='${JSONobj.color}' AND year > ${parseInt(JSONobj.latestYear)};`;
		
		//let sql=`SELECT * FROM cars2;`;
		console.log(sql);
		con.connect(err => {
			if(err) throw err;
		});
		
		let p1= new Promise((resolve,reject) => {
			con.query(sql, function (err, result, fields) {
				if(err) {reject(err.message)}
				else resolve(result)
			});
		});
		p1.then(result => {
			//console.log(result);
			con.end();
			thisres(JSON.stringify(result));
		}).catch(err => console.log(err));
	});
}

module.exports.modEmpLoginCheck=modEmpLoginCheck;
module.exports.modCustLoginCheck=modCustLoginCheck;
module.exports.modCreateAccount=modCreateAccount;
module.exports.modDisplayAll=modDisplayAll;
module.exports.modSendRefineFormData=modSendRefineFormData;