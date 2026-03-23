// ===============================
// SELECT MEMBERS CONTAINER
// ===============================

const url = "data/members.json";
const container = document.querySelector("#members");

// ✅ ONLY RUN DIRECTORY CODE IF #members EXISTS
if (container) {
    getMembers();
    setupViewButtons();
}

// ===============================
// LOAD MEMBERS
// ===============================

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("members.json not found");
        }

        const data = await response.json();
        displayMembers(data.members);

    } catch (error) {
        console.log("ERROR LOADING JSON:", error);
    }
}

// ===============================
// DISPLAY MEMBERS
// ===============================

function displayMembers(members) {

    container.innerHTML = "";

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

        // WEBSITE (if exists)
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

// ===============================
// GRID / LIST TOGGLE
// ===============================

function setupViewButtons() {

    const gridBtn = document.querySelector("#gridBtn");
    const listBtn = document.querySelector("#listBtn");

    // ✅ Prevent errors on pages without buttons
    if (!gridBtn || !listBtn) return;

    gridBtn.addEventListener("click", () => {
        container.classList.add("grid");
        container.classList.remove("list");
    });

    listBtn.addEventListener("click", () => {
        container.classList.add("list");
        container.classList.remove("grid");
    });
}