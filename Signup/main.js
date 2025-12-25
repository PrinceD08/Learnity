function Main(){
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        if(e.target.checkValidity()){
            window.location.href='Home/home.html'
        }
    });
    if (document.getElementById("input1").value === ""){
        document.getElementById("Error1").textContent = "Please Enter a Valid Email address"
    }
    if (document.getElementById("input2").value === ""){
        document.getElementById("Error2").textContent = "Password must be at least 6 characters"
    }
    else{
        window.location.href='Main/main.html';
    }
}