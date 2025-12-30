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
const API_KEY = "AIzaSyByDNqVY9GVT9Dm1TTjsanw0DPglZLruO4"; // Replace with your key
const query = document.getElementById("searchBar").value || "tutorials"; 
const maxResults = 5;

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("videos");
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