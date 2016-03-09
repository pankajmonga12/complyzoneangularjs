
var pubFunctions = {

  subscribeToUser : function (locationId) {
				
				io.socket.post('/userCheck', { userID: locationId }, function(data, res){
					console.log( data.room );
					console.log( res);
					  io.socket.on(data.room, function onServerSentEvent (msg) {
                          console.log(msg);
                     });
				});

				
			}
}

	io.socket.on('messageevent', function (data) {
	   console.log(data);
	})

	io.socket.on('loginevent', function (data) {
	   console.log('logout event call');
	   window.location.href = "http://localhost:1337/logout";
	   console.log(data);
	})
   
    io.socket.on('testEvent', function (res) {
  
       console.log(res);

   });