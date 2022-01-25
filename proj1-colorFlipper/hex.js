const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colors =document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener('click' ,function(){
let hexValue = "#"
for(let i=1;i<=6;i++){
    hexValue += hex[randNumGenerator()];
}
colors.textContent= hexValue;
document.body.style.backgroundColor = hexValue;
console.log(hexValue);
}); 
function randNumGenerator() {
    return Math.floor(Math.random() * hex.length);
}
