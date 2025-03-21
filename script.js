import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let people = Array(4).fill(null).map(() =>
                                       new Person(faker.person.firstName(), faker.number.int({ min: 1, max: 50 }))
);

function updateAgesAndRemove() {
  people.forEach(person => person.age += 1);
  people = people.filter(person => person.age < 40);
}

function addNewPerson() {
  people.push(new Person(faker.person.firstName(), faker.number.int({ min: 1, max: 50 })),);
}

let counter = 0;

setInterval(() => {
  updateAgesAndRemove();

  if (counter % 2 === 0) {
    addNewPerson();
  }
  counter++;

  console.log(people.map(p => `${p.name}: ${p.age}`).join(', '));
}, 1000);

