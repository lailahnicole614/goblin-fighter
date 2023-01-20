export function renderMice(dataMice) {
    const newMiceEl = document.createElement('li');
    const miceNameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hpEl = document.createElement('p');

    miceNameEl.textContent = dataMice.name;
    hpEl.textContent = dataMice.hp;

    if (dataMice.hp > 0) {
        emojiEl.textContent = '🐭';
    } else {
        emojiEl.textContent = '☠️';
        newMiceEl.classList.add('hide');
    }

    newMiceEl.classList.add('mouse');

    newMiceEl.append(miceNameEl, hpEl, emojiEl);

    return newMiceEl;
}
