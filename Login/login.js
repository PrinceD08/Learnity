document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("inputEmail").value.trim();
    const password = document.getElementById("inputPassword").value.trim();

    if (!email) {
      document.getElementById("Error1").textContent = "Please enter a valid email";
      return;
    }

    if (!password) {
      document.getElementById("Error2").textContent = "Please enter your password";
      return;
    }

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Logged in successfully!");
        window.location.href = "../Home/home.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
});

document.getElementById("forgotPassword").addEventListener("click", () => {
  const email = document.getElementById("inputEmail").value.trim();

  if (!email) {
    alert("Please enter your email first.");
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert("Password reset email sent! Check your inbox.");
    })
    .catch((error) => {
      alert(error.message);
    });
});