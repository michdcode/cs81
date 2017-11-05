function Person (name, mother, father, spouse, children) {
	this.name = name;
	this.mother = mother;
	this.father = father;
	this.spouse = spouse;
	this.children = [children];
	this.changeSpouse = function(newSpouse) {
		this.spouse = newSpouse;
	};
}

var Tuulia = new Person("Tuulia", "unknown", "unknown", "Ani", "Sipho");
var Ani = new Person("Ani", "unknown", "unknown", "Sipho", ["Aolani, Hiro, Xue"]);
var Sipho = new Person("Sipho", "Tuulia", "unknown", "Ani", ["Aolani, Hiro, Xue"]);
var Aolani = new Person("Aolani", "Ani", "Sipho", "unknown", "unknown");
var Hiro = new Person("Hiro", "Ani", "Sipho", "unknown", "unknown");
var Xue = new Person("Xue", "Ani", "Sipho", "unknown", "unknown");