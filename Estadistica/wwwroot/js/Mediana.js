
let campos = document.getElementById("Campos");
let camposOrdenados = document.getElementById("CamposOrdenados");
let resultados = document.getElementById("Resultados");
let txtCantidad = document.getElementById("txtCantidad");
var numeros = new Array();
var med;

definirCantidadDigitos = () => {

    let cantidad = txtCantidad.value;
    let template = ``;

    switch (cantidad) {

        case "7":
            template = `
            <div class="col-md-1">
                <input id="txtCampo1" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo2" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo3" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo4" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo5" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo6" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo7" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "8":
            template = `
            <div class="col-md-1">
                <input id="txtCampo1" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo2" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo3" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo4" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo5" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo6" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo7" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo8" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "9":
            template = `
            <div class="col-md-1">
                <input id="txtCampo1" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo2" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo3" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo4" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo5" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo6" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo7" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo8" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo9" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "10":
            template = `
            <div class="col-md-1">
                <input id="txtCampo1" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo2" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo3" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo4" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo5" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo6" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo7" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo8" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo9" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo10" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        default:
            template = `
            <div class="alert alert-info alert-danger">                
                <p> Error: La cantidad de digitos debe ser un rango entre 7 y 10 </p>
            </div>
            `;
            campos.innerHTML = template;
    }
}

ordenarDigitos = () => {

    let cantidad = txtCantidad.value;
    let template = ``;

    ordenar();
    mediana();
    var half = Math.floor(numeros.length / 2);

    switch (cantidad) {

        case "7":
            template = `
            <div class="col-md-1">
                <input id="txtCampoOrdenado1" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado2" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado3" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado4" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado5" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado6" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado7" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 7; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "8":
            template = `
            <div class="col-md-1">
                <input id="txtCampoOrdenado1" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado2" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado3" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado4" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado5" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado6" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado7" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado8" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 8; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "9":
            template = `
            <div class="col-md-1">
                <input id="txtCampoOrdenado1" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado2" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado3" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado4" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado5" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado6" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado7" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado8" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado9" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 9; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "10":
            template = `
            <div class="col-md-1">
                <input id="txtCampoOrdenado1" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado2" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado3" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado4" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado5" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado6" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado7" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado8" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado9" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado10" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 10; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        default:
            template = `
            <div class="alert alert-info alert-danger">                
                <p> Error: El ordenamiento fue incorrecto. </p>
            </div>
            `;
            camposOrdenados.innerHTML = template;
    }

    if (numeros.length % 2) {
        // impar
        template = `
            <div class="col-md-6">
                <input id="txt" value="" readonly class="form-control form-control-line" />
            </div>`;
        resultados.innerHTML = template;
        var temp = document.getElementById("txt");
        temp.value = "Med = X(" + numeros.length + " + 1) / 2   Med = X" + half + " = " + med;
    } else {
        //par
        template = `
            <div class="col-md-6">
                <input id="txt" value="" readonly class="form-control form-control-line" />
            </div>`;
        resultados.innerHTML = template;
        var temp = document.getElementById("txt");
        temp.value = "Med = (X" + numeros.length + "/2 + X" + numeros.length + "/2 + 1)   Med = (X" + half + " X" + half + " + 1)/2 = " + med; 
    }

    grafico(numeros);
}

ordenar = () => {

    let cantidad = txtCantidad.value;

    switch (cantidad) {

        case "7":
            for (let i = 0; i < 7; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "8":
            for (let i = 0; i < 8; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "9":
            for (let i = 0; i < 9; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "10":
            for (let i = 0; i < 10; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;
    }

}

mediana = () => {

    var half = Math.floor(numeros.length / 2);
    var num = [];

    for (let i = 0; i < numeros.length; i++) {
        num[i] = parseInt(numeros[i]);
    }

    if (numeros.length % 2) {
        med = num[half];
    } else {
        med = (num[half - 1] + num[half]) / 2.0;
    }
        
}