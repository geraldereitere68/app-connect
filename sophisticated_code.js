/* sophisticated_code.js */

// This code demonstrates an advanced reservation system for a hotel

// Define an object constructor for creating Room objects
function Room(number, type, price, isAvailable) {
  this.number = number;
  this.type = type;
  this.price = price;
  this.isAvailable = isAvailable;
}

// Creating an array of Room objects
var rooms = [
  new Room(101, 'Single', 100, true),
  new Room(102, 'Double', 150, true),
  new Room(103, 'Suite', 250, true),
  // ... more room objects
];

// Define a Reservation object constructor
function Reservation(room, startDate, endDate, customerName) {
  this.room = room;
  this.startDate = startDate;
  this.endDate = endDate;
  this.customerName = customerName;
}

// Creating an initially empty array to store reservations
var reservations = [];

// Function to check room availability within given dates
function isRoomAvailable(room, startDate, endDate) {
  for (var reservation of reservations) {
    if (reservation.room === room) {
      if (
        (startDate >= reservation.startDate && startDate <= reservation.endDate) ||
        (endDate >= reservation.startDate && endDate <= reservation.endDate)
      ) {
        return false;
      }
    }
  }
  return true;
}

// Function to make a reservation
function makeReservation(room, startDate, endDate, customerName) {
  if (room.isAvailable && isRoomAvailable(room, startDate, endDate)) {
    reservations.push(new Reservation(room, startDate, endDate, customerName));
    room.isAvailable = false;
    return true;
  } else {
    return false;
  }
}

// Function to cancel a reservation
function cancelReservation(room, startDate, endDate) {
  for (var i = 0; i < reservations.length; i++) {
    var reservation = reservations[i];
    if (reservation.room === room && reservation.startDate === startDate && reservation.endDate === endDate) {
      reservations.splice(i, 1);
      room.isAvailable = true;
      return true;
    }
  }
  return false;
}

// Usage example:
makeReservation(rooms[1], new Date(2022, 1, 1), new Date(2022, 1, 5), "John Doe");
makeReservation(rooms[2], new Date(2022, 2, 1), new Date(2022, 2, 10), "Jane Smith");
cancelReservation(rooms[1], new Date(2022, 1, 1), new Date(2022, 1, 5));

// ... more advanced functionality and logic for the hotel reservation system