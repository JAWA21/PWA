/*
	* Mid Terms for PWA-1
	name: Jeanna Anderson
	date: Aug 20, 2013
*/

(function(){ 

//array of student objects
students = [
	{firstName:'Jeanna', 
	address: {
		street:'SomePlace Blvd',
		city:'Orlando',
		state: 'Florida'},
	GPA:[2.6, 3.0, 3.2],
	phone: '123-456-7890'
	},
	{firstName: 'Iron Man',
	address: {
		street: 'Infinite Loop',
		city: 'Maple',
		state: 'Connectictut'},
	GPA: [3.0, 3.4, 4.0],
	phone: '000-000-0000'
	}
]

//accessing the dom elements and setting them to a variable
var domElements = [
        fname = document.getElementById('name'),
        address = document.getElementById('address'),
        gpa = document.getElementById('gpa'),
        date = document.getElementById('date'),
        gpaavg = document.getElementById('gpaavg'),
        phone = document.getElementById('phone')
];

//console log all of the students in the array
for(var i=0, max=students.length; i<max; i++){
	console.log('Student Name ' + students[i].name);
	console.log('Address ' + students[i].address.street +', '+ students[i].address.city + ' ' + students[i].address.state);
	console.log('GPA ' + students[i].GPA);
}

//function to add a student to the array
var addData = function(name, addressSt, addressCity, addressState, GPA, phone){
	var student = {
	firstName: name,
	address: {
		street: addressSt,
		city: addressCity,
		state: addressState
		},
	GPA: GPA,
	phone: phone
	}
	students.push(student);
}

//calling the addData function and having it take in the student info
addData('Superman', '123 Test Dr', 'Orlando', 'Florida', [3.2, 4.0, 2.2], '704-444-4444' );


//console logging the current students
for(var i=0, max=students.length; i<max; i++){
	console.log('Student Name: ' + students[i].name);
	console.log('Address: ' + students[i].address.street +', '+ students[i].address.city + ' ' + students[i].address.state);
	console.log('GPA: ' + students[i].GPA);
};

var averageGPA=[]; // array to hold the avgGPA of the students
var myCntr = 0; //counter so one knows how many times the btn is clicked
var average = 0; //sets the average

//average the GPA of each student, drop the extra decimals, and push the number to an array
var avgGPA = function(){
	for(var i=0, max=students.length; i<max; i++){
		average = (students[i].GPA[0] + students[i].GPA[1] + students[i].GPA[2]) / 3;
		average = average.toFixed(2);
		averageGPA.push(average);
	}
}

avgGPA(); // calls the avgGPA function

//create a new date, setup today format and console log it
var d = new Date();
var today = d.getMonth() + "/" + d.getDay() + "/" + d.getFullYear();
console.log(d.getMonth() + "/" + d.getDay() + "/" + d.getFullYear());

//access the nextBtn
var nextBtn = document.querySelector('#info_btn');
	console.log('program starting');

//creating the onClick function 
nextBtn.onclick = function(e){
	console.log('btn clicked');
	for(var i=0; i<1; i++){ //make it loop once
		if(myCntr < students.length) // as long as myCntr is less than students.length, run
		{
			//set the student info to the innerHTML and console log a student onClick
			fname.innerHTML = students[i + myCntr].firstName; 
			address.innerHTML = students[i + myCntr].address.street + ", " + students[i + myCntr].address.city + " " + students[i + myCntr].address.state;
			gpa.innerHTML = students[i + myCntr].GPA;
			date.innerHTML = today;
			gpaavg.innerHTML = averageGPA[i + myCntr];
			console.log('Student Name: ' + students[i + myCntr].name);
			console.log('Address: ' + students[i + myCntr].address.street +', '+ students[i + myCntr].address.city + ' ' + students[i + myCntr].address.state);
			console.log(date);
			console.log('GPA Avg: ' + averageGPA[i + myCntr]);

		}else if(myCntr > students.length)
		{
			//get the btn and anchor and change the anchor text
			var btn = document.getElementById("info_btn");
			var anchor = btn.getElementsByTagName("a");
			console.log(btn);
			anchor.innerHTML = "DONE!!!";
		}
	}
	//count up
	myCntr++;
}

})(); // end wrapper