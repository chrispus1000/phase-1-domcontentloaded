// Your code goes here
//document.addEventListener("DOMContentLoaded", function(){
//    console.log("The DOM has loaded");
//})
const content = document.getElementById("text")
console.log(content)
document.addEventListener('DOMContentLoaded', function(){
    content.innerHTML = "This is really cool!"
})