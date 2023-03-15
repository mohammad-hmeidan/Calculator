let output = document.getElementById("output");
let lastValue = document.getElementById("value")
function display(num){
    output.innerHTML +=num;
}
function Clear(){
    output.innerHTML = "";
}
function Delete(){
    output.innerHTML = output.innerHTML.slice(0,-1);
}
function Calc(){
    try {
        output.innerHTML = eval(output.innerHTML);
    } catch (error) {
        output.innerHTML = `Error`
    }
    if (output.innerHTML !== "Error") {
        sessionStorage.setItem("Ans",output.innerHTML);
    }
}
function Ans(){
    if(sessionStorage.getItem("Ans")){
        output.innerHTML += sessionStorage.getItem("Ans");
    }else{
        lastValue.classList.add("not-found")
        setTimeout(()=>{
            lastValue.classList.remove("not-found")
        },2000)
    }
}
document.onkeydown = function(e){
    if (e.key === "1" |e.key === "2"|e.key === "3"|e.key === "4"|e.key === "5"|e.key ==="6"|e.key === "7"|e.key === "8"|e.key === "9"|e.key === "0"|e.key === "."|e.key === "+"|e.key === "-"|e.key === "*"|e.key === "/" ) {
        display(e.key)
    }
    if (e.key === "Backspace") {
        Delete()
    }
    if (e.key ==="Enter") {
        Calc()
    }
    console.log(e.key)
}