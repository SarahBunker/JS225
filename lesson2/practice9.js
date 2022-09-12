let makeCountry = function(name, continent, visited = false) {
  return {
    name,
    continent,
    visited: false,
    getDescription() {
      let verbhave = this.visited? 'have' : "haven't";
      return `${this.name} is located in ${this.continent}. I ${verbhave} visited ${this.name}.`
    },
    visitCountry() {
      this.visited = true;
    },
  }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription()      );       // "The Republic of Chile is located in South America."
console.log(canada.getDescription()     );      // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."

chile.visitCountry();
console.log(chile);

console.log(chile.getDescription()      );       // "The Republic of Chile is located in South America."
