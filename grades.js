//Ryan Postma
//CMP 344 
//Chapter 2 grades exercise
//displays the grades and average of a student
//1/26/15


//the student object
function studentGrades() {
	this.grades = [];
	this.add = add;
	this.average = average;
}//end student object


//function to add a grade into the array
function add(grade) {
	this.grades.push(grade);
}//end add function


//average function for students grades
function average() {
	var total = 0;
	for (var i = 0; i < this.grades.length; ++i) {
		total += this.grades[i];
	}//end for
	return print(total / this.grades.length);
}//end average function


var student1 = new studentGrades();

student1.add(89);
student1.add(93);
student1.add(79);
student1.add(97);
student1.add(89);

print(student1.grades);
print("Student 1 average grades");
student1.average();
