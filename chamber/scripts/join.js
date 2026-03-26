// ---------- timestamp ----------
document.querySelector("#timestamp").value =
new Date().toISOString();


// ---------- modal logic ----------
const links = document.querySelectorAll("[data-modal]");
const closeBtns = document.querySelectorAll(".close");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document
      .getElementById(link.dataset.modal)
      .showModal();
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest("dialog").close();
  });
});