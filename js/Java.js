//alert("Bienvenidos");
//swal("Bienvenidos");

function updateinput(newValue, clear=false) {
    var div= document.getElementById("total");

    div.value = clear ? newValue : `${div.value}${newValue}`;
}

function imprimiropera(data) {
    updateinput(` ${data.value} `);
}

function imprimirnumero(data) {
    updateinput(data.value);
}

function limpiarinput() {
    updateinput("", true);
}

function igualar() {
    var data = document.getElementById("total").value;
    var array = validaoper(data.split(" "));
    updateinput(array, true);

    alert(data.split(" "));
}

function validaoper(arrayData) {
    var resultado;
    var numero1, numero2;

    numero1 = Number(arrayData[0]);
    numero2 = Number(arrayData[2]);

    switch (arraydata[1]) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
    }
    return resultado;
}