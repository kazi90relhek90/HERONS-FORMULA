 document.getElementById("BUTTON").addEventListener("click", elements)

function HeronsFormula(a,b,c) {
    let s = (a+b+c)/2
    let Area = (s* (s-a)*(s-b)*(s-c))**0.5
    return Area
}

function elements(){
    let A = Number(document.getElementById("sideA").value)
    let B = Number(document.getElementById("sideB").value)
    let C = Number(document.getElementById("sideC").value)
    let area = HeronsFormula(A,B,C)
    document.getElementById("area").innerHTML = area
}