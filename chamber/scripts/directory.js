// ===============================
// LOAD MEMBERS
// ===============================

const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {

    container.innerHTML = ""; // clear container

    members.forEach(member => {

        // CREATE ELEMENTS
        const card = document.createElement("section");
        const logo = document.createElement("img");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const description = document.createElement("p");

        // CONTENT
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        description.textContent = member.description;

        // IMAGE
        logo.src = `images/${member.image}`;
        logo.alt = `${member.name} logo`;
        logo.loading = "lazy";
        logo.width = 150;

        // BUILD CARD
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(description);

        // WEBSITE (only if exists)
        if (member.website && member.website !== "#") {
            const website = document.createElement("a");
            website.href = member.website;
            website.textContent = "Visit Website";
            website.target = "_blank";
            card.appendChild(website);
        }

        // ADD TO PAGE
        container.appendChild(card);
    });
}

getMembers();


// ===============================
// GRID / LIST TOGGLE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const gridBtn = document.querySelector("#gridBtn");
    const listBtn = document.querySelector("#listBtn");
    const members = document.querySelector("#members");

    if (!gridBtn || !listBtn || !members) return;

    gridBtn.addEventListener("click", () => {
        members.classList.add("grid");
        members.classList.remove("list");
    });

    listBtn.addEventListener("click", () => {
        members.classList.add("list");
        members.classList.remove("grid");
    });

});