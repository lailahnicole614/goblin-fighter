/* Imports */
import { renderMice } from './utils.js';
/* Get DOM Elements */
const miceEl = document.getElementById('mice');
const catLivesEl = document.getElementById('cat-lives');
const catImgEl = document.getElementById('cat-img');
const inputEl = document.getElementById('mice-input');
const buttonEl = document.getElementById('mice-button');
const chasedCountEl = document.getElementById('chased-count');

/* State */
let chasedCount = 0;
let catLives = 9;
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
        hp: 2,
    },
];

/* Events */
buttonEl.addEventListener('click', () => {
    const miceName = inputEl.value;
    if (miceName) {
    }
    //New mouse =
    const newMice = {
        name: miceName || Math.ceil(Math.random() * 30),
        hp: Math.ceil(Math.random() * 6),
    };
    //Moving mouse into state:
    mice.push(newMice);
    inputEl.value = '';
    displayMice();
});

/* Display Functions */
function displayMice() {
    miceEl.textContent = '';
    //looping for mice in state=
    for (let mouse of mice) {
        const newMouseEl = renderMice(mouse);
        // event listener
        newMouseEl.addEventListener('click', () => {
            chasedCount++;
            chasedCountEl.textContent = `You've chased ${chasedCount} mice;`;

            if (catLives <= 0) {
                alert('you are too tired to chase!');
                return;
            }

            // player chases the mice with their cat:
            if (Math.random() > 0.3) {
                alert('you chased' + ' ' + mouse.name);
                mouse.hp--;
            }
            // } else {
            //     alert(mouse.name + ' ' + 'outran you!');
            //     catLives--;
            // }

            if (Math.random() > 0.8) {
                alert(mouse.name + ' ' + 'outran you and now you are out of breath!');
                catLives--;
            } else {
                alert('you caught' + ' ' + mouse.name);
            }

            if (catLives <= 0) {
                catImgEl.classList.add('tired');
            }

            catLivesEl.textContent = catLives;

            displayMice();
        });

        miceEl.append(newMouseEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)

displayMice();
