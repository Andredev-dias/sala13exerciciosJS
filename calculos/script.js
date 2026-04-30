function somar(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber 
    var resp = document.getElementById("resposta")
    resp.textContent = n1 + n2
}


function dividir(){
    var n3 = parseFloat(document.getElementById("n3").value)
    var n4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respDiv")

    if(n4 !== 0){
        resp.textContent = n3 / n4
    }else{
        resp.textContent = "Não se divide por 0"
    }
}



