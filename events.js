
class EventEmitter{
	
	constructor(){		
		this.escuchadores = [{nombre: null, funcion:null}];
	}

	on(evento, funcion) {
		this.evento = evento;
		this.funcion = funcion;
		this.escuchadores.push({nombre: evento, funcion: funcion });			
	}

	emit(eventos, argumentos){
		this.eventos = eventos;
		this.argumentos = argumentos;
		try{
			var evento = this.escuchadores.find( elem => elem.nombre==eventos && evento==null);
			if(!evento){throw 'No hay eventos programados con el nombre '+ eventos}
			evento.funcion(argumentos);	
			//console.log('Programado para esta ahora una temperatura ideal de '+ argumentos+ 'ºC');

		}catch(err){
			console.log(err);
		}		
	}
}

exports = module.exports = EventEmitter; 