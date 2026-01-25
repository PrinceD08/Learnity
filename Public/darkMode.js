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
    document.getElementById("PTbody").style.background = "url('file.jpeg')";
    document.getElementById("PTbody").style.backgroundRepeat = "no-repeat";
    document.getElementById("PTbody").style.backgroundSize = "cover";
    document.getElementById("PTbody").style.backgroundAttachment = "fixed";
    document.getElementById("section1").style.backgroundColor = "rgba(24, 24, 24, 0.9)";

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
    document.getElementById("section1").style.backgroundColor = "rgb(255, 255, 255)";
    

    const dashboard = document.getElementById("dashboard");
    if (dashboard) {
        dashboard.style.backgroundImage = "url('DashboardL.png')";
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

function on() {
    document.body.background = "url('PMode.mp4')";
}
function off(){

}