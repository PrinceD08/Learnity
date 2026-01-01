const iconMap = {
  dropdown: "../../HomeIcons/menu.svg",
  home: "../Home/Icons/layout-dashboard.svg",
  tutorial: "../Home/Icons/square-play.svg",
  study: "../Home/Icons/book-open.svg",
  test: "../Home/Icons/book-text.svg",
  notes: "../Home/Icons/book.svg",
  assistant: "../Home/Icons/sparkles.svg",
  calculator: "../Home/Icons/calculator.svg",
  notification: "../Home/Icons/bell.svg",
  settings: "../Home/Icons/settings.svg",
};

document.querySelectorAll(".icon-container").forEach(container => {
  const iconName = container.dataset.icon;

  if (iconMap[iconName]) {
    const img = document.createElement("img");
    img.src = iconMap[iconName];
    img.classList.add("icon");
    container.appendChild(img);
  }
});


const btn = document.getElementById("floating-menu-btn");
const menu = document.getElementById("section1");

btn.addEventListener("click", () => {
    menu.style.display =
        menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.style.display = "none";
    }
});