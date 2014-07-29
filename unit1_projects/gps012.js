var actor1 = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!"
};

var actor2 = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?"
};

var actor3 = {
  name: "Jim Carrey",
  age: 52,
  quote: "...So you're telling me there's a chance? YEAH!"
};


function Client(actorName, actorAge, actorQuote) {
  this.name = actorName;
  this.age = actorAge;
  this.quote = actorQuote;
  this.showQuote = function () {
    console.log(this.name + " is " + this.age +
    " and his favorite quote is " + this.quote + "!");
  };

};











var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.age === 48);
console.log(shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.");
// shooterMcGavin.showQuote();

var objArray = [actor1, actor2, actor3, shooterMcGavin];

for(i=0; i < objArray.length; i++) {
  console.log(objArray[i].name + " is " + objArray[i].age +
    " and his favorite quote is " + objArray[i].quote + "!");
};
