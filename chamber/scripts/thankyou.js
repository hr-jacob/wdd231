const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName");
const organization = params.get("organization");
const membership = params.get("membership");

const message = document.getElementById("confirmation");

message.innerHTML = `
Welcome <strong>${firstName}</strong>!<br><br>
Your application for <strong>${organization}</strong>
has been received.<br>
Membership Level: <strong>${membership}</strong>.
`;