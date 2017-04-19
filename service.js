var through = require('through2');
var split = require('split2');
var combine = require('stream-combiner2');

var parse = require('./parse');
var encode = require('./encode');

module.exports =  function(){
	combine(
		split(),
		parse(),
		through.obj(function(req,enc,cb){
			var response ={};
			if(req.err)
			{
				response.ok = false;
				response.error = req.error;
			}
			else if(req.str)
			{
				response.upperCased = req.str.toUpperCase();
				response.ok = true;
				response.original = req.str;
			}
			this.push(response);       
            cb();        
        }),
        encode()
        );
	
}

