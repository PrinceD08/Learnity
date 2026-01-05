// Apply theme when page loads (for ALL pages)
document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});

function darkMode() {
    applyDarkMode();
    localStorage.setItem("theme", "dark");
}

function lightMode() {
    applyLightMode();
    localStorage.setItem("theme", "light");
}

// ----- Theme styles -----

function applyDarkMode() {
    document.body.style.backgroundColor = "rgba(46, 46, 46, 1)";
    document.body.style.color = "white";

    setShadow("profile");
    setShadow("profile2");
    setShadow("profile3");
}

function applyLightMode() {
    document.body.style.backgroundColor = "rgb(244, 255, 255)";
    document.body.style.color = "black";

    removeShadow("profile");
    removeShadow("profile2");
    removeShadow("profile3");
}

// ----- Helpers -----

function setShadow(id) {
    const el = document.getElementById(id);
    if (el) el.style.boxShadow = "0px 0px 20px white";
}

function removeShadow(id) {
    const el = document.getElementById(id);
    if (el) el.style.boxShadow = "none";
}