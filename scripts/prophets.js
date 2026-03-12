const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    // Fetch the data
    const response = await fetch(url);

    // Convert response to JSON
    const data = await response.json();

  displayProphets(data.prophets);

  getProphetData();
}