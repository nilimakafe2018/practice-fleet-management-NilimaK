// // Classes and Inheritance Pair Activity
// You’ve been hired to help a logistics company build a system to manage its fleet of vehicles. 
// The system should be able to:
// 1. Create individual vehicles with properties like type, make, model, year, and mileage.
// 2. Add a method to update the mileage of a vehicle when it is used.
// 3. Add a method to display the details of the vehicle in a user-friendly format.
// 4. Instantiate multiple vehicles from the class and test your methods.

// Tasks 1. Define the Vehicle Class:
// The constructor should include properties: type, make, model, year, and mileage.
// Use default values for mileage (e.g., 0).


// defining vehicle class
class Vehicle {
    // constructor initialize vehicle properties
    constructor(type, make, model, year, mileage = 0){
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage; 
    }  


// Tasks 2. Add Methods:
// drive(distance): Increases the vehicle’s mileage by the given distance (in kilometers or miles).
// getDetails(): Returns a formatted string describing the vehicle’s details.


    //Increases the vehicle’s mileage by the given distance
    drive(distance){
        if (distance > 0){
            this.mileage += distance;
            console.log(`${this.type} has driven for ${distance} in KM.`)
    }
        else {
        console.log("Distance Invalid")
        }

}
    // returning a formatted string describing the vehicle
    getDetails() {
    return (`${this.make} ${this.type} ${this.model} ${this.year}, Mileage is ${this.mileage} in KM`);
    }
}

// Tasks 3. Create and Use Vehicle Objects:
// Instantiate at least three vehicle objects with different properties (e.g., a car, a truck, and a motorcycle).
// Use the drive method to simulate trips and update mileage. Use the getDetails method to print each vehicle’s updated information.

//Creating three different vehicle objects
const car = new Vehicle ("Car", "Honda", "Pilot", 2024);
const truck = new Vehicle ("Truck", "GMC", "Sierra", 2020);
const motorcycle = new Vehicle ("Motorcycle", "Suzuki", "Hayabusa", 2023);

// using simulate trips 
car.drive(100);
truck.drive(150);
motorcycle.drive(200);


// printing updated details output
console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());


