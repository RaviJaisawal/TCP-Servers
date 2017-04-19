var net = require('net');
var Service = require('./service');


var server = net.createServer();

server.on('connection',function(conn){

    console.log('New connection');


    conn.setEncoding('utf8');

    conn.once('close',function(){
    	console.log('connection closed');
    });

   

    conn.pipe(Service()).pipe(conn);

    // conn.on('data',function(buf){
    // 	conn.write('data ',buf);
    // });
});



module.exports = server;