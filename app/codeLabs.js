'use strict';

module.exports = {
	
	Car : class Car {

		constructor(name = 'General', model = 'GM', type) {
			this.type = type;
			this.model = model;
			this.name = name;
			this.speed = '0 km/h'
		}

		get numOfDoors() {
			
			let numOfDoors;
			if(this.name == 'Porshe' || this.name == 'Koenigsegg') {
				numOfDoors = 2;
			}

			else {
				numOfDoors = 4;
			}

			return numOfDoors;
		}

		get numOfWheels() {

			let numOfWheels;

			if (this.type == 'trailer') {

				numOfWheels = 8;
				this.isSaloon = false;
			}

			else {

				numOfWheels = 4;
				this.isSaloon = true;
			}

			return numOfWheels;

		}

		drive(acceleration) {

			if(this.name == 'Porshe') {

				this.speed = '250 km/h';
			}

			else if(this.type == 'trailer') {

				this.speed = '77 km/h';
			}

			return this;
		}
	}
}