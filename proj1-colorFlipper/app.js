const colors = ["#5d8aa8", "red", "rgba(133,122,200)", "#f15025", "#efdecd", "#b2beb5", "#ffe135", "rgb(178,34,34"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    //get random number between 0-3
    const randNum = randNumGenerator();
    document.body.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];
    // console.log(randNum);
});

function randNumGenerator() { 
    return Math.floor(Math.random() * colors.length);
}