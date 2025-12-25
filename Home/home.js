function runAI(){
    window.location.href='AIAssistant/index-ai.html'
}


 const iconMap = {
  dropdown: "../Icons/menu.svg",
  home: "../Icons/layout-dashboard.svg",
  tutorial: "../Icons/square-play.svg",
  study: "../Icons/book-open.svg",
  test: "../Icons/book-text.svg",
  notes: "../Icons/book.svg",
  assistant: "../Icons/sparkles.svg",
  community: "../Icons/users.svg",
  notification: "../Icons/bell.svg",
  settings: "../Icons/settings.svg",
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