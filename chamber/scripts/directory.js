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

        // ✅ IMAGE (safe version)
        const image = document.createElement("img");
        image.src = `images/${member.image || "placeholder.webp"}`;
        image.alt = `${member.name} logo`;
        image.loading = "lazy";

        // ✅ NAME
        const name = document.createElement("h3");
        name.textContent = member.name;

        // ✅ ADDRESS
        const address = document.createElement("p");
        address.textContent = member.address;

        // ✅ PHONE
        const phone = document.createElement("p");
        phone.textContent = member.phone;

        // ✅ MEMBERSHIP LEVEL
        const membership = document.createElement("p");

        // convert membership safely (number OR string)
        let level = "";

        switch (Number(member.membership)) {
            case 1:
                level = "Member";
                break;
            case 2:
                level = "Silver";
                break;
            case 3:
                level = "Gold";
                break;
            default:
                level = "Member";
        }

        membership.textContent = `Membership Level: ${level}`;

        // ✅ APPEND ELEMENTS
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);

        container.appendChild(card);
    });
}

getMembers();