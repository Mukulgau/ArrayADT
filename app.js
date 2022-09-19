class person {
  constructor(name){
    this.name = name;
    // document.getElementById('p1').innerHTML = `${name}`;
  }
  getDetails(){
    // document.getElementById('p1').innerHTML = this.name;
    return (`The name of the bike is ${this.name}.`)
  }
  static add(a,b){
    return a + b;
  }
}
const mukul = new person("Mukul");
mukul.getDetails();
console.log(person.add(4,4));



function person1(firstName){
  this.firstName = firstName;
  // document.getElementById('p2').innerHTML = firstName;
}
const abhi = new person1("Abhi");


