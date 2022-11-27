class Ticket {
  constructor(arrOfGuest) {
    let totalPrice = 0;
    arrOfGuest.map((guest) => {
      totalPrice += this.getPrice(guest.age);
    });
    this.guest = arrOfGuest;
    this.totalPrice = totalPrice;
  }

  getPrice(age) {
    if (age <= 2) {
      return 0;
    } else if (age > 2 && age < 18) {
      return 100;
    } else if (age >= 18 && age < 60) {
      return 500;
    } else if (age >= 60) {
      return 300;
    }
  }

  dispayTicket() {
    console.log(
      `This yout ticket! \nGuest: ${this.guest.length} \nPrice: ${this.totalPrice}`
    );
  }

  verifyTicket() {
    this.guest.forEach((e) => console.log(`${e.name} (age: ${e.age})`));
  }
}

// const ticket = new Ticket([
//   { name: "Guest 1", age: 5 },
//   { name: "Guest 2", age: 11 },
//   { name: "Guest 3", age: 32 },
//   { name: "Guest 4", age: 29 },
//   { name: "Guest 5", age: 70 },
// ]);
// ticket.dispayTicket();
// ticket.verifyTicket();
