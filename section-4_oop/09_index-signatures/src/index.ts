class SeatAssignment {
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Arthur';
seats.A2 = 'Rei';
seats['A3'] = 'Reimus'; // another way of setting a key value pair in an object
