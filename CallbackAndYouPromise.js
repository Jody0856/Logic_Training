// callback = a function inside a function

// first declare the function
function foo(input,cb){
	if(input){ //if true
		//null the error, send the oke
		cb(null,'oke')
	}else{
		// send the error, null the msg
		cb('sorry error', null)
	}
}

//second declare the callback
function callback(err,msg){
	if(err){
		console.log('The value is False')
	}else{
		console.log(msg+' The value is True')
	}
}

// put name of the callback in the parameter
// foo(false, callback)
foo(true, callback)

//promises = same as callback but the same times different

//declare the function
function bar(input){
	//declare the promise
	return new Promise((reject, resolve)=>{
		if(input){
			//if true send to 'then'
			resolve('Good brother that\'s '+input)
		}else{
			//if false send to 'catch'
			reject('sorry brother that\'s '+input)
		}
	})
}

// the promises must be called with 'then' and 'catch'

// bar(false)
// 	.then(msg=>console.log(msg))
// 	.catch(err=>console.log(err));
// //sorry error

bar(true)
	.then(msg=>console.log(msg))
	.catch(err=>console.log(err));
//ok