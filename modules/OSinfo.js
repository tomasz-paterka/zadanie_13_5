var os = require('os');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var changeTimeShowing = require('../modules/uptime');
	var userInfo = os.userInfo();
	console.log('System:'.gray.bgYellow, type);
	console.log('Release:'.red.bgWhite, release);
	console.log('CPU model:'.blue.bgWhite.italic, cpu);
	console.log('Uptime: ~'.green, (changeTimeShowing.print(uptime / 60)));
	console.log('User name:'.yellow, userInfo.username);
	console.log('Home dir:'.cyan.underline, userInfo.homedir);
}

exports.print = getOSinfo;