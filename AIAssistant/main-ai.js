function Askopenai(){
  console.log("USER INPUT :",
  document.getElementById("insert").value);
  const userInput = document.getElementById("insert").value;
        document.getElementById("output").textContent = "Sending...";
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
    function Explain1(){
      document.getElementById("insert").value = "Explain quantum Computing";
    }
    function Explain2(){
      document.getElementById("insert").value = "Help Me Write a Story";
    }
    function Explain3(){
      document.getElementById("insert").value = "Analyze Data trends";
    }
    function Explain4(){
      document.getElementById("insert").value = "Debug My Code";
    }