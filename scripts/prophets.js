const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

// Fetch prophet data
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();

  displayProphets(data.prophets);
}

// Display prophets
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {

    // Create elements
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Prophet name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Image attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute(
      'alt',
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements
    card.appendChild(fullName);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

// Call function
getProphetData();