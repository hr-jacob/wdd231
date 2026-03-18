const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembers();

function displayMembers(members) {

    members.forEach(member => {

        // Create elements
        const card = document.createElement("section");
        const logo = document.createElement("img");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const description = document.createElement("p");
        const website = document.createElement("a");

        // Fill content
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        description.textContent = member.description;

        website.textContent = "Visit Website";
        website.href = member.website;
        website.target = "_blank";

        // Image
        logo.setAttribute("src", `images/${member.image}`);
        logo.setAttribute("alt", `${member.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.width = 150;

        // Build card
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(description);
        card.appendChild(website);

        // Add card to page
        container.appendChild(card);
    });
}