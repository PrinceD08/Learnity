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

    const ptBody = document.getElementById("PTbody");
    if (ptBody) {
        ptBody.style.backgroundImage = "url('file.jpeg')";
        ptBody.style.backgroundRepeat = "no-repeat";
        ptBody.style.backgroundSize = "cover";
        ptBody.style.backgroundAttachment = "fixed";
    }

    const section1 = document.getElementById("section1");
    if (section1) section1.style.backgroundColor = "rgba(24, 24, 24, 0.9)";

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
    setShadow("profile4")
}

function applyLightMode() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgb(244, 255, 255)";
    document.body.style.color = "black";

    const section1 = document.getElementById("section1");
    if (section1) section1.style.backgroundColor = "rgb(255, 255, 255)";

    const dashboard = document.getElementById("dashboard");
    if (dashboard) dashboard.style.backgroundImage = "url('DashboardL.png')";

    removeShadow("profile");
    removeShadow("profile2");
    removeShadow("profile3");
    removeShadow("profile4");
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

// ----- Video Background -----

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bgVideo");

    if (localStorage.getItem("videoBg") === "on") {
        video.src = "PMode.mp4";
        video.style.display = "block";
        video.play().catch(() => {});
    }
});

function onVideoBackground() {
    const video = document.getElementById("bgVideo");
    video.src = "PMode.mp4";
    video.style.display = "block";
    video.play().catch(() => {});
    localStorage.setItem("videoBg", "on");
}

function offVideoBackground() {
    const video = document.getElementById("bgVideo");
    video.pause();
    video.style.display = "none";
    localStorage.setItem("videoBg", "off");
}