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

 const iconMap = {
  dropdown: "../Icons/menu.svg",
  home: "../Icons/layout-dashboard.svg",
  tutorial: "../Icons/square-play.svg",
  study: "../Icons/book-open.svg",
  test: "../Icons/book-text.svg",
  notes: "../Icons/book.svg",
  assistant: "../Icons/sparkles.svg",
  calculator: "../Icons/calculator.svg",
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


function searchVideos() {
  const query = document.getElementById("searchBar").value || "tutorials";
  const container = document.getElementById("videos");
  container.innerHTML = ""; // clear old results

  fetch('https://learnity-youtube-backend.vercel.app/api/youtube?q=' + encodeURIComponent(query), {
  headers: { "x-learnity-key": "learnity123" }
})
    .then(res => res.json())
    .then(data => {
      if (!data.items) return;

      data.items.forEach(video => {
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`;
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
      });
    })
    .catch(err => console.error(err));
}