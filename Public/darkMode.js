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
    setShadow("profile4");

    // ✅ VIDEO WORKS ONLY IN DARK MODE
    if (localStorage.getItem("videoBg") === "on") {
        const video = document.getElementById("bgVideo");
        if (video) {
            video.src = "PMode.mp4";
            video.style.display = "block";
            video.play().catch(() => {});
        }
    }
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

    // ❌ FORCE VIDEO OFF IN LIGHT MODE
    const video = document.getElementById("bgVideo");
    if (video) {
        video.pause();
        video.style.display = "none";
    }
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
    const theme = localStorage.getItem("theme");
    const video = document.getElementById("bgVideo");

    if (theme === "dark" && localStorage.getItem("videoBg") === "on") {
        if (video) {
            video.src = "PMode.mp4";
            video.style.display = "block";
            video.play().catch(() => {});
        }
    } else {
        if (video) {
            video.pause();
            video.style.display = "none";
        }
    }
});

function onVideoBackground() {
    if (localStorage.getItem("theme") !== "dark") {
        alert("Video background works only in dark mode 🌙");
        return;
    }

    localStorage.setItem("videoBg", "on");

    const video = document.getElementById("bgVideo");
    if (video) {
        video.src = "PMode.mp4";
        video.style.display = "block";
        video.play().catch(() => {});
    }
}

function offVideoBackground() {
    localStorage.setItem("videoBg", "off");

    const video = document.getElementById("bgVideo");
    if (video) {
        video.pause();
        video.style.display = "none";
    }
}