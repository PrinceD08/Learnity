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

document.addEventListener("DOMContentLoaded", () => {
  const calcBtn = document.getElementById("calcBtn");
  const calculator = document.getElementById("calculatorFrame");

  if (!calcBtn || !calculator) {
    console.error("Calculator button or iframe not found");
    return;
  }

  calcBtn.addEventListener("click", () => {
    calculator.style.display =
      calculator.style.display === "none" ? "block" : "none";
  });
});

let outsideClickCount = 0;

document.addEventListener("click", (event) => {
  const calculator = document.getElementById("calculatorFrame");
  const calcBtn = document.getElementById("calcBtn");

  if (
    calculator.style.display === "block" &&
    !calculator.contains(event.target) &&
    !calcBtn.contains(event.target)
  ) {
    outsideClickCount++;

    if (outsideClickCount >= 2) {
      calculator.style.display = "none";
      outsideClickCount = 0; // reset counter
    }
  } else {
    outsideClickCount = 0;
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const storedUser = localStorage.getItem("learnity_username");

    if (storedUser) {
      document.getElementById("Username").textContent = storedUser;
    }
  });


  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "../Login/index.html"; // redirect if not logged in
    }
  });