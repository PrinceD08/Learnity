// Apply theme when page loads (ALL pages)
document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});

function darkMode() {
    localStorage.setItem("theme", "dark");
    applyDarkMode();
}

function lightMode() {
    localStorage.setItem("theme", "light");
    applyLightMode();
}

// ----- Theme styles -----

function applyDarkMode() {
    document.body.style.color = "white";
    document.body.style.backgroundImage = "url('Background.jpeg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    // SAFE dashboard handling
    const dashboard = document.getElementById("dashboard");
    if (dashboard) {
        dashboard.style.backgroundImage = "url('DaBackground.jpeg')";
        dashboard.style.backgroundSize = "cover";
        dashboard.style.backgroundRepeat = "no-repeat";
        dashboard.style.backgroundPosition = "right";
    }

    setShadow("profile");
    setShadow("profile2");
    setShadow("profile3");
}

function applyLightMode() {
    document.body.style.background = "rgb(244, 255, 255)";
    document.body.style.color = "black";

    const dashboard = document.getElementById("dashboard");
    if (dashboard) {
        dashboard.style.background = "transparent";
    }

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