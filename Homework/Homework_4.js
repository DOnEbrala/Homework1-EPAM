class Animal {
  constructor(name, ability) {
    this.name = name;
    this.ability = ability;
  }

  abilities() {
    console.log(`this is a ${this.name} ${this.ability}`);
  }
}

//

class Cat extends Animal {
  constructor(name, ability) {
    super(name, ability);
  }
  skill() {
    console.log(` he can ${this.ability}`);
  }
}

const dogg = new Cat("cat", "swim");

dogg.abilities();
dogg.skill();
