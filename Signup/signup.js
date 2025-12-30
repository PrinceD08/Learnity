document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("inputEmail").value.trim();
    const password = document.getElementById("inputPassword").value.trim();

    // Validation
    if (!email) {
      document.getElementById("Error1").textContent = "Please enter a valid email";
      return;
    }
    if (!password || password.length < 6) {
      document.getElementById("Error2").textContent = "Password must be at least 6 characters";
      return;
    }

    // Firebase signup using global auth object
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Signed up successfully!");
        window.location.href = "../Home/home.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
});