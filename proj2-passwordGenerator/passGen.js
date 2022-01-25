const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",'@', '#', '$', '%','^', '&', '*', '¢', '£', '¥'];
const password = document.querySelector('.password');
const btn= document.getElementById("btn");

btn.addEventListener('click',function(){
    let passCode="";
for(let i = 1; i<=10;i++){
passCode+=characters[getRandNum()]
}
password.textContent=passCode;
}
);
function getRandNum(){
    return Math.floor(Math.random()*characters.length)
}