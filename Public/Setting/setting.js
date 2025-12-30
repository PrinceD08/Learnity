document.getElementById("saveBtn").addEventListener("click", () => {
      const userName = document.getElementById("username").value.trim();

      if (!userName) {
        alert("Please type a username");
        return;
      }

      // Save username in localStorage
      localStorage.setItem("learnity_username", userName);

      // Redirect to home page
      window.location.href = "../Home/home.html";
    });