const EventEmitter = require('./events');


class Programador extends EventEmitter{
	
	constructor(config){
		super();		
		
	
		for (let i in config){
			clearInterval(this.intervalId);
		
			const later = require('later');		
			later.date.localTime();	

			const sched = later.parse.text('at '+ config[i].hora); 		
			this.intervalId = later.setInterval(() => 
				this.emit('ideal', config[i].temperatura), sched);
			//console.log('Programado para las '+ config[i].hora +' una temperatura ideal de '+ config[i].temperatura + 'ºC')
		}
		
	}

}
exports = module.exports = Programador;
