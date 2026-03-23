const container = document.querySelector("#spotlight-container");

async function loadSpotlights() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Only Gold (3) and Silver (2)
    const qualified = data.members.filter(
        member => member.membership >= 2
    );

    // Shuffle array
    const shuffled = qualified.sort(() => 0.5 - Math.random());

    // Pick 3
    const spotlights = shuffled.slice(0, 3);

    displaySpotlights(spotlights);
}

function displaySpotlights(members) {
    container.innerHTML = "";

    members.forEach(member => {

        // ✅ SAME CARD CLASS AS DIRECTORY
        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" 
                 alt="${member.name} logo" loading="lazy">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">
                Visit Website
            </a>
            <p class="membership">Member Level: ${getLevel(member.membership)}</p>
        `;

        container.appendChild(card);
    });
}

function getLevel(level) {
    if (level === 3) return "Gold";
    if (level === 2) return "Silver";
    return "Member";
}

loadSpotlights();