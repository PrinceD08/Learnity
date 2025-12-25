function runAI(){
    window.location.href='AIAssistant/index-ai.html'
}
const mq = window.matchMedia("(max-width: 640px)");

function handleScreen(e) {
  if (e.matches) {
    document.getElementById("nav-bar1").textContent= "◯";
  }
  if (e.matches) {
    document.getElementById("nav-bar2").textContent = "▶️";
  }
  if (e.matches) {
    document.getElementById("nav-bar3").textContent = "🕮";
  }
  if (e.matches) {
    document.getElementById("nav-bar4").textContent = "🗉";
  }
  if (e.matches) {
    document.getElementById("nav-bar5").textContent = "🗅";
  }
  if (e.matches) {
    document.getElementById("nav-bar6").textContent = "✴";
  }
  if (e.matches) {
    document.getElementById("nav-bar7").textContent = "🗩";
  }
  if (e.matches) {
    document.getElementById("nav-bar8").textContent = "🕭";
  }
  if (e.matches) {
    document.getElementById("nav-bar9").textContent = "❁";
  }
  
  else {
    document.getElementById("nav-bar1").textContent= "";
    document.getElementById("nav-bar2").textContent = "▶️ Tutorials";
    document.getElementById("nav-bar3").textContent = "🕮 Study Guides";
    document.getElementById("nav-bar4").textContent = "🗉 Practice Tests";
    document.getElementById("nav-bar5").textContent = "🗅 My Notes";
    document.getElementById("nav-bar6").textContent = "✴ AI Assistant";
    document.getElementById("nav-bar7").textContent = "🗩 Community";
    document.getElementById("nav-bar8").textContent = "🕭 Notificatons";
    document.getElementById("nav-bar9").textContent = "❁ Settings";
  }
}

handleScreen(mq);
mq.addEventListener("change", handleScreen);

 const icon = document.createElement("img");

  // 2. Set its src to your SVG file
  icon.src = "../Icons/bell.svg";

  // 3. Add a class for styling
  icon.classList.add("icon");

  // 4. Append to a container in your HTML
  document.getElementById("icon-container").appendChild(icon);