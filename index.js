var server = require('./server');


server.listen( 8000,function(){
	console.log('server is listening %i',server.address());
})
