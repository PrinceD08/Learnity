function runAI(){
    window.location.href='AIAssistant/index-ai.html'
}


 const iconMap = {
  dropdown: "../Home/Icons/menu.svg",
  home: "../Home/Icons/layout-dashboard.svg",
  tutorial: "../Home/Icons/square-play.svg",
  study: "../Home/Icons/book-open.svg",
  test: "../Home/Icons/book-text.svg",
  notes: "../Home/Icons/book.svg",
  assistant: "../Home/Icons/sparkles.svg",
  community: "../Home/Icons/users.svg",
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

  const sidebar = document.getElementById("section1");
const toggleBtn = document.getElementById("menu-toggle");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});