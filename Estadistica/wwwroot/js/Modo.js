


let campos = document.getElementById("Campos");
let camposOrdenados = document.getElementById("CamposOrdenados");
let resultados = document.getElementById("Resultados");
let txtCantidad = document.getElementById("txtCantidad");
var numeros = new Array();
let duplicados = [];

definirCantidadDigitos = () => {

    let cantidad = txtCantidad.value;
    let template = ``;

    switch (cantidad) {

        case "6":
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
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

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

        default:
            template = `
            <div class="alert alert-info alert-danger">                
                <p> Error: La cantidad de digitos debe ser un rango entre 6 y 9 </p>
            </div>
            `;
            campos.innerHTML = template;
    }
}

ordenarDigitos = () => {

    let cantidad = txtCantidad.value;
    let template = ``;

    ordenar();
    modo();
    const numerosUnicos = [...new Set(duplicados)];

    switch (cantidad) {

        case "6":
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
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 6; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

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

        default:
            template = `
            <div class="alert alert-info alert-danger">                
                <p> Error: El ordenamiento fue incorrecto. </p>
            </div>
            `;
            camposOrdenados.innerHTML = template;
    }

    if (numerosUnicos.length == 0) {
        template = `
            <div class="alert alert-info alert-danger">                
                <p> No hay modo / valor modal </p>
            </div>
            `;
        resultados.innerHTML = template;
    } else if (numerosUnicos.length == 1) {
        template = `
            <div class="col-md-6">
                <input id="txt" value="" readonly class="form-control form-control-line" />
            </div>`;
        resultados.innerHTML = template;
        var temp = document.getElementById("txt");
        temp.value = "Unimodal = Mo = " + numerosUnicos[0];
    } else {
        template = `
            <div class="col-md-6">
                <input id="txt" value="" readonly class="form-control form-control-line" />
            </div>`;
        resultados.innerHTML = template;
        var temp = document.getElementById("txt");
        temp.value = "Bimodal";
        for (let i = 0; i < numerosUnicos.length; i++) {
            temp.value = temp.value + " Mo = " + numerosUnicos[i];
        }
    }

    for (let i = numerosUnicos.length; i > 0; i--) {
        numerosUnicos.pop();
        duplicados.pop();
    }

    grafico(numeros);
}

ordenar = () => {

    let cantidad = txtCantidad.value;

    switch (cantidad) {

        case "6":
            for (let i = 0; i < 6; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

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
    }

}

modo = () => {

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i + 1] === numeros[i]) {
            duplicados.push(numeros[i]);
        }
    }
}