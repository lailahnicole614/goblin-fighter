/* Imports */

/* Get DOM Elements */
const miceEl = document.getElementById('mice');
const catLivesEl = document.getElementById('cat-lives');
const catImgEl = document.getElementsById('cat-img');
const inputEl = document.getElementById('mice-input');
const buttonEl = document.getElementById('mice-button');
const chasedCountEl = document.getElementById('chased-count');

/* State */
let chasedCount = 0;
let cat = 9;
const mice = [
    {
        name: 'speedy',
        hp: 5,
    },
    {
        name: 'mousy',
        hp: 3,
    },
    {
        name: 'tiny',
        hp: 4,
    },
];

/* Events */
buttonEl.addEventListener('click', () => {
    const miceName = inputEl.ariaValueMax;
    if (!miceName) {
        return;
    }

    const newMice = {
        name: miceName,
        lives: Math.ceil(Math.random() * 6),
    };

    mice.push(newMice);
    inputEl.value = '';
    displayMice();
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
