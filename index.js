
function clearScreen() {
        document.getElementById("result").value = "";
    }
     
function display(value) {
    document.getElementById("result").value += value;
 }



function calculate()
{
    const p = document.getElementById("result").value;
    const q =  eval(p);
    document.getElementById('result').value = q;
}

