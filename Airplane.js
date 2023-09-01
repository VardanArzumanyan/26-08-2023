function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}

Airplane.prototype.takeOff = function () {
  this.isFlying = true;
  console.log(`${this.name} is take off`);
};

Airplane.prototype.land = function () {
  this.isFlying = false;
  console.log(`${this.name} is landing`);
};

let airplane = new Airplane("Airplane 1");
airplane.takeOff();
console.log(`${airplane.name} is flying: ${airplane.isFlying} `);
airplane.land();
console.log(`${airplane.name} is flying: ${airplane.isFlying} `);
