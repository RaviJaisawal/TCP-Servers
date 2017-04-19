var through = require('through2');

module.exports =  function(){
	
    through.obj(function(chunk,enc,cb){
        this.push(JSON.parse(chunk));
         cb();
    });
	
}