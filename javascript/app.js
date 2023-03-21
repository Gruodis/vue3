const counter = document.querySelector('.counter-num');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

let count = 0;
counter.innerText = count;
plus.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});

minus.addEventListener('click', () => {
    count--;
    counter.innerText = count;
});