// traversing the dom

// const questionBtns = document.querySelectorAll('.question-btn');

// questionBtns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {

//         // e.currentTarget.parentElement.parentElement.classList.toggle('show-text');

//         // Assign the parent element's class list to a variable for a structured view

//         const questions = e.currentTarget.parentElement.parentElement.classList;
//         questions.toggle('show-text');

//     });
// });

//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function (qns) {
    const btn = qns.querySelector('.question-btn');
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== qns) {
                item.classList.remove('show-text');
            };
        });



        qns.classList.toggle('show-text')
    })

})