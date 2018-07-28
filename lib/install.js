// Create parameters
module.exports = function(){
	
	var param1 = {
		name: 'NETWORK_SCANNER_HOSTS',
		value: '192.168.1.0/25'
	};
	
	var param2 = {
		name: 'NETWORK_SCANNER_FREQUENCY_IN_MINUTE',
		value: '5'
	};

	//we check if the parameters exists
	return gladys.param.getValues([param1.name, param2.name])
		.catch(() => {
			//is they doesn't, we create them
			return gladys.param.setValue(param1)
				.then(() => gladys.param.setValue(param2));
		});
};
