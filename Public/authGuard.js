// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get the content container
  const content = document.getElementById("content");

  // Hide content initially
  if (content) content.style.display = "none";

  // Listen for auth state changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in → show the page
      if (content) content.style.display = "block";
    } else {
      // User not logged in → redirect to login
      window.location.href = "../Login/login.html";
    }
  });
});