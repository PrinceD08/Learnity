function Askopenai(){
  console.log("USER INPUT :",
  document.getElementById("insert").value);
  const userInput = document.getElementById("insert").value;

    if (document.getElementById("insert").value === ""){
      document.getElementById("no-text").textContent = "Please input something"
    }
    else{
      document.getElementById("output").textContent = "Sending...";
    }
        
        if (!document.getElementById("insert").value) return;
        fetch("https://spectre-9h2s.onrender.com/api/openai", {
  method: "POST",
    headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
      prompt : userInput
  })
})
.then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById("output").innerText =
      data?.choices?.[0]?.message?.content  // normal AI reply
      || data?.error?.message              // API/server error
      || "No response from AI"             // fallback if something else happens
    })
    };

     const iconMap = {
  ask: "../Icons/send-horizontal.svg",
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