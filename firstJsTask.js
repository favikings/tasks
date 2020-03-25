/**
    Below is the Solution to the Task given for the Javascript Track
    Tutor: StartNg
    Student: Asuainok Favour.
    Track: Frontend.
 */

var myName = "Asuainok Favour";
var myCourses = ["Html", "Css", "Javascript",];

console.log("My name is "+ myName);
console.log("My courses are " + myCourses);

// Prints out all odd numbers when courses are odd
if (myCourses.length % 2 != 0){
    
    for (var i = 1; i<=200; i++){
        if(i % 2 !=0){
            console.log(i);
        }
    }
}else{
    console.log("Even Numbers");
}