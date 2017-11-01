"use strict";
let fs = require('fs'),
	exec = require('child_process').exec,
	str = 'npm uninstall';
let dirs = null;
try{
	fs.readdirSync('./node_modules');
}catch(e){
	console.error('Error:', "Maybe no node_modules directory of project at here" )
	return;
}


for (var prop in dirs){
	str += ' ' + dirs[prop];
	try{
		exec(str, function (error, stdout, stderr) {

			console.log('\x1b[36m%s\x1b[0m', '\n' + stdout);
			console.log('\x1b[37m', ''); //restore white

			console.log('\x1b[31m', stderr);
			console.log('\x1b[37m', ''); //restore white

			if (error !== null) {
				console.log('\x1b[31m', 'exec error: ' + error);
				console.log('\x1b[37m', ''); //restore white
			}
		});
	}catch(e){
		console.log('uninstall exception', dirs[prop]);
	}
}