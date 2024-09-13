const toggleBtn = document.getElementById('toggleBtn');
const cardContainer = document.getElementById('cardContainer');
const btnContainer = document.getElementById('btnContainer');
const card__row = Array.from(document.getElementsByClassName('card__row'));
const cards = Array.from(document.getElementsByClassName('card'));
let isGreenFirst = true;

function displayCards(sortedCards) {
  cardContainer.innerHTML = '';
  sortedCards.forEach(card => {
    cardContainer.appendChild(card);
  });
}

toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('change')
  let bg = document.querySelector('.bg')
  bg.classList.toggle('active');
  btnContainer.classList.toggle('change');
  
    const sortedCards = card__row.sort((a, b) => {
        if (!isGreenFirst) {
            if (a.getAttribute('data-color') === 'green' && b.getAttribute('data-color') === 'pink') return -1;
            if (a.getAttribute('data-color') === 'pink' && b.getAttribute('data-color') === 'green') return 1;
        } else {
            if (a.getAttribute('data-color') === 'pink' && b.getAttribute('data-color') === 'green') return -1;
            if (a.getAttribute('data-color') === 'green' && b.getAttribute('data-color') === 'pink') return 1;
        }
        return 0;
    });

    isGreenFirst = !isGreenFirst;  // Toggle the state
    displayCards(sortedCards);
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        const popupId = card.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.classList.add('active'); // Show the popup
    });
});

const closeButtons = document.getElementsByClassName('popup-close');
Array.from(closeButtons).forEach(button => {
    button.addEventListener('click', (e) => {
        const popup = e.target.closest('.popup');
        popup.classList.remove('active'); // Hide the popup
    });
});

const popups = Array.from(document.getElementsByClassName('popup'));
popups.forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active'); // Hide the popup
        }
    });
});