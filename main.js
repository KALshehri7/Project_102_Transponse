// Transportation Company Project

// Vehicle class
class Vehicle {
  constructor(id, name, manufacturer) {
    this.id = id;
    this.name = name;
    this.manufacturer = manufacturer;
  }
}

// Car class
class Car extends Vehicle {
  constructor(id, name, manufacturer, type) {
    super(id, name, manufacturer);
    this.type = type;  // gas or electric
  }
}

// Plane class
class Plane extends Vehicle {
  constructor(id, name, manufacturer, type) {
    super(id, name, manufacturer);
    this.type = type;  // type of plane
  }
}

// Employee class
class Employee {
  constructor(id, name, dob) {
    this.id = id;
    this.name = name;
    this.dob = dob;
  }
}

// Driver class
class Driver extends Employee {
  constructor(id, name, dob, licenseId) {
    super(id, name, dob);
    this.licenseId = licenseId;
  }
}

// Pilot class
class Pilot extends Employee {
  constructor(id, name, dob, licenseId) {
    super(id, name, dob);
    this.licenseId = licenseId;
  }
}

// Reservation class
class Reservation {
  constructor(reservationId, reservationDate, employeeId, vehicleId) {
    this.reservationId = reservationId;
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
  }
}

// Define vehicles
let vehicles = [
  new Car(1, 'Model S', 'Tesla', 'electric'),
  new Car(2, 'Model 3', 'Tesla', 'electric'),
  new Car(3, 'Model X', 'Tesla', 'electric'),
  new Plane(4, '737', 'Boeing', 'commercial'),
  new Plane(5, 'A320', 'Airbus', 'commercial')
];

// Define employees
let employees = [
  new Driver(1, 'John Doe', '1980-01-01', 'D123'),
  new Pilot(2, 'Jane Doe', '1980-01-01', 'P123')
];

// Define reservations
let reservations = [];

// Function to assign a vehicle to an employee
function assignVehicle(employeeId, vehicleId) {
  let employee = employees.find(e => e.id === employeeId);
  let vehicle = vehicles.find(v => v.id === vehicleId);
  if (employee instanceof Driver && vehicle instanceof Car ||
      employee instanceof Pilot && vehicle instanceof Plane) {
    let reservation = new Reservation(reservations.length + 1, new Date(), employeeId, vehicleId);
    reservations.push(reservation);
    console.log(`Assigned ${vehicle.name} to ${employee.name}.`);
  } else {
    console.log('Incompatible assignment.');
  }
}

// Test the function
assignVehicle(1, 1);  
assignVehicle(2, 4);  
assignVehicle(1, 4);  
assignVehicle(2, 1);  
assignVehicle(2, 5); 

// Print all reservations
console.log(reservations.map(r => `Reservation ID: ${r.reservationId}, 
Date: ${r.reservationDate}, 
Employee ID: ${r.employeeId}, 
Vehicle ID: ${r.vehicleId}`));
