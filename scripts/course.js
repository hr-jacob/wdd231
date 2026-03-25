const courses = [
{code:"WDD130", credits:3, completed:true},
{code:"WDD131", credits:3, completed:false},
{code:"WDD231", credits:3, completed:false},
{code:"CSE110", credits:2, completed:true},
{code:"CSE111", credits:2, completed:false}
];

const container = document.querySelector("#courses");
const courseDetails = document.querySelector("#courseDetails");
const credits = document.querySelector("#credits");

function displayCourses(list){

container.innerHTML="";

list.forEach(course => {

const card = document.createElement("div");

card.textContent = course.code;

if(course.completed){
card.classList.add("completed");
}

container.appendChild(card);

});

const total = list.reduce((sum, course)=> sum + course.credits,0);

credits.textContent = total;

}

displayCourses(courseDetails);

document.querySelector("#all").addEventListener("click", ()=>{
displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", ()=>{
displayCourses(courses.filter(c => c.code.includes("WDD")));
});

document.querySelector("#cse").addEventListener("click", ()=>{
displayCourses(courses.filter(c => c.code.includes("CSE")));
});z