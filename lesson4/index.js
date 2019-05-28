// Fetch the computer's mac address
require('getmac').getMac(function(err, macAddress){
	if (err)  throw err
	console.log(macAddress)
})

// Fetch the computer's mac address for a specfici interace
require('getmac').getMac({iface: 'eth0'}, function(err, macAddress){
	//if (err)  throw err
	console.log(macAddress)
});

// Validate that an address is a mac address
/*if ( require('getmac').isMac("192.168.1.1") ) {
	console.log('valid mac')
}
else {
	console.log('invalid mac')
}*/