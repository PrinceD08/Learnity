function append(value){
    document.getElementById("output").value += value ;
}
function calcu(){
    try{
        document.getElementById("output").value = eval(document.getElementById("output").value);
    }
    catch{
        document.getElementById("output").value = "Error";
    }
}
function delte(){
    document.getElementById("output").value = "";
}