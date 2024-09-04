function sim(){
    alert("Aceita Ser Minha Esposa! :)") 
}

function desvia(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.top = geraPosição(10, 90);
    btn.style.right = geraPosição(10, 90);
    console.log("opa, desviei...");
}

function geraPosição(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}