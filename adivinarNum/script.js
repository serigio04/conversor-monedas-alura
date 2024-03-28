var secretNum = parseInt(Math.random()* 1000 + 1); // devulve un numero entre 0 y 999, se le suma 1 para que sea 1 - 1000
alert("¿listo para iniciar el juego?")
console.log(secretNum)
// alert(secretNum)
while (secretNum != digitNum){
    var digitNum = prompt("Ingresa un número entre 1 y 1000");

    if( secretNum == digitNum ){
        alert(`Has acertado, el número es ${secretNum}`);
    }else if ( digitNum > secretNum ){
        alert("Has ingresado un número mayor al número secreto, intentalo de nuevo");
    }else if( digitNum < secretNum){
        alert("Has ingresado un número menor al número secreto, intentalo de nuevo");
    }else{
        break;
    }
};