const spotlightURL = "data/members.json"; // adjust path if needed

async function loadSpotlights() {
  try {
    const response = await fetch(spotlightURL);
    const data = await response.json();

    displaySpotlights(data.members);

  } catch (error) {
    console.error("Spotlight error:", error);
  }
}

function displaySpotlights(members) {

  // keep only gold (3) & silver (2)
  const qualified = members.filter(member =>
    member.membership === 2 || member.membership === 3
  );

  // shuffle randomly
  const shuffled = qualified.sort(() => 0.5 - Math.random());

  // pick 2 or 3 randomly
  const count = Math.floor(Math.random() * 2) + 2;
  const selected = shuffled.slice(0, count);

  const container = document.querySelector("#spotlight-container");
  container.innerHTML = "";

  selected.forEach(member => {

    const card = document.createElement("section");
    card.classList.add("spotlight");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Membership:</strong> ${getMembershipLevel(member.membership)}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

function getMembershipLevel(level) {
  if (level === 3) return "Gold Member";
  if (level === 2) return "Silver Member";
  return "Member";
}

loadSpotlights();