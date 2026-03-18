const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement("section");

        // IMAGE
        const image = document.createElement("img");
        image.src = `images/${member.image}`;
        image.alt = `${member.name} logo`;
        image.loading = "lazy";

        // NAME
        const name = document.createElement("h3");
        name.textContent = member.name;

        // ADDRESS
        const address = document.createElement("p");
        address.textContent = member.address;

        // PHONE
        const phone = document.createElement("p");
        phone.textContent = member.phone;

        // MEMBERSHIP LEVEL
        const membership = document.createElement("p");

        const levels = {
            1: "Member",
            2: "Silver",
            3: "Gold"
        };

        membership.textContent =
            `Membership Level: ${levels[member.membership]}`;

        // ADD BASIC INFO
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);

        // WEBSITE (ONLY IF EXISTS)
        if (member.website && member.website !== "#") {
            const website = document.createElement("a");
            website.href = member.website;
            website.textContent = "Visit Website";
            website.target = "_blank";
            website.rel = "noopener noreferrer";

            card.appendChild(website);
        }

        card.appendChild(membership);

        container.appendChild(card);
    });
}
}

        card.appendChild(website);

        // MEMBERSHIP LEVEL
        const membership = document.createElement("p");

        const levels = {
            1: "Member",
            2: "Silver",
            3: "Gold"
        };

        membership.textContent =
            `Membership Level: ${levels[member.membership]}`;

        // ADD TO CARD
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website); 
        card.appendChild(membership);

        container.appendChild(card);
    });
}

getMembers();