const http=require('http');
const path=require('path');
const fs=require('fs');
const fD=require('form-data');

let controller=require('./controller.js');
let currentUserID;

let serv=http.createServer((req,res)=>{
	let filePath=path.join(__dirname,req.url==='/'? 'index.html' : req.url);
	let extname=path.extname(filePath);
	
	let contentType='text/html';
	switch(extname){
		case '.js':
		contentType='text/javascript';
		break;
		case '.css':
		contentType='text/css';
		break;
		case '.json':
		contentType='application/json';
		break;
		case '.png':
		contentType='image/png';
		break;
		case '.jpg':
		contentType='image/jpg';
		break;
	}
	
	if(req.method==='GET'){
		if(req.url==='/displayAll'){
				let promC=controller.displayAll();
				promC.then(result => {
				res.writeHead(200, {'Content-Type':'application/json'});
				res.write(JSON.stringify(result));
				res.end();
			}).catch(err => {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.write(err);
				res.end();
			});
		}
		else{
			fs.readFile(filePath,(err, content) => {
				if(err) {
					if(err.code=='ENOENT'){
						fs.readFile(path.join(__dirname,'invalidPage.html'),(err,content) =>{
							res.writeHead(200, {'Content-Type':'text/html'});
							res.write(content, 'utf8');
							res.end();
						})
					}
					else {
						res.writeHead(500);
						res.write(`Server error: ${err.code}`);
					}
				}
				else{
					res.writeHead(200, {'Content-Type': contentType});
					res.write(content, 'utf8');
					res.end();			
				}
			});
		}
	}
	else if(req.url==='/empLoginCheck' && req.method==='POST'){
		let promC=controller.empLoginCheck(req,res);
		promC.then(result => {
			currentUserID=JSON.parse(result).ID;
			//console.log(currentUserID);
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(JSON.parse(result).msg);
			res.end();
		}).catch(err => {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(err);
			res.end();
		});
	}
	else if(req.url==='/custLoginCheck' && req.method==='POST'){
		let promC=controller.custLoginCheck(req,res);
		promC.then(result => {
			currentUserID=JSON.parse(result).ID;
			//console.log(currentUserID);
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(JSON.parse(result).msg);
			res.end();
		}).catch(err => {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(err);
			res.end();
		});
	}
	else if(req.url==='/createAccount' && req.method==='POST'){
		let promC=controller.createAccount(req,res);
		promC.then(result => {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(result);
			res.end();
		}).catch(err => {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(err);
			res.end();
		});
	}
	else if(req.url==='/sendRefineFormData' && req.method==='POST'){
		let promC=controller.sendRefineFormData(req,res);
		promC.then(result => {
			res.writeHead(200, {'Content-Type':'application/json'});
			res.write(JSON.stringify(result));
			res.end();
		}).catch(err => {
			res.writeHead(200, {'Content-Type':'text/html'});
			console.log(err.message);
			res.write(err.message);
			res.end();
		});
	}
});

let PORT=process.env.PORT || 5000;
serv.listen(PORT, () => console.log(`Server running on port ${PORT}`));