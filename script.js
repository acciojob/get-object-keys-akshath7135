const student={
	name:"john",
	age:30,
	city:"New York"
};
Object.prototype.getKeys=function() {
	return Object.keys(this);
}
console.log(student.getKeys());