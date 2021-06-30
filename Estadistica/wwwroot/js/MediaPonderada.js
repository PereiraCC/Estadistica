

let campos = document.getElementById("Campos");
let tablaFrecuencia = document.getElementById("TablaFrecuencia");
let resultados = document.getElementById("Resultados");
let txtCantidad = document.getElementById("txtCantidad");
let sumaTabla = document.getElementById("SumaTabla");
var numeros = new Array();
var numerosOrdenados = new Array();
var frecuencias = new Array();
var resul = new Array();

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

        case "11":
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
            <div class="col-md-1">
                <input id="txtCampo11" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "12":
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
            <div class="col-md-1">
                <input id="txtCampo11" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo12" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "13":
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
            <div class="col-md-1">
                <input id="txtCampo11" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo12" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo13" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "14":
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
            <div class="col-md-1">
                <input id="txtCampo11" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo12" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo13" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo14" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "15":
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
            <div class="col-md-1">
                <input id="txtCampo11" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo12" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo13" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo14" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo15" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
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
                <p> Error: La cantidad de digitos debe ser un rango entre 7 y 15 </p>
            </div>
            `;
            campos.innerHTML = template;
    }
}

ordenarDigitos = () => {

    let cuerpoTabla;
    let cantidad = txtCantidad.value;
    let template = ``;
    let templ = ``;
    var suma = 0;
    var sumaF = 0;
    let contador = 0;
    var media = 0;

    ordenar();
    sacarFrecuencia();
    sacarResultado();

    const numerosUnicos = [...new Set(numerosOrdenados)];

    template = `
    <div class="table-responsive">
        <table class="table table-striped" id="tabla">
            <thead>
                <tr>
                    <th scope="col">Identificador</th>
                    <th scope="col">Datos</th>
                    <th scope="col">Datos Ordenados</th>
                    <th scope="col">Frecuencia</th>
                    <th scope="col">Resultado (X*F)</th>
                </tr>
            </thead>
            <tbody id="cuerpo">
                        
            </tbody>
        </table>
    </div>
    `;
    tablaFrecuencia.innerHTML = template;

    switch (cantidad) {

        case "7":
            cuerpoTabla = document.getElementById("cuerpo");
            for (let i = 0; i < 7; i++) {
                templ = `
                    <tr>
                        <td id="rowIdentificador">` + (i + 1) + `</td>
                        <td id="rowDato">` + numeros[i] + `</td>
                        <td id="rowDatoOrdenado">` + numerosOrdenados[i] + `</td>`;
                        if (numerosOrdenados[i] != numerosOrdenados[i-1]) {
                            templ += `<td id="rowFrecuencia">` + frecuencias[numerosUnicos[contador]] + `</td>`;
                            sumaF = sumaF + frecuencias[numerosUnicos[contador]];
                            contador++;
                        } else {
                            templ += `<td id="rowFrecuencia"></td>`;
                        }
                        if (resul[i] != 0) {
                            templ += `<td id="rowResultado">` + resul[i] + `</td>`;
                        } else {
                            templ += `<td id="rowResultado"></td>`;
                        }   
                        templ +- `</tr>`;
                cuerpoTabla.innerHTML += templ;
            }
            template = `
                <div class="col-md-6">
                    <input id="txtSuma" value="" readonly class="form-control form-control-line" />
                </div>`;
            sumaTabla.innerHTML = template;
            for (let i = 0; i < cantidad; i++) {
                suma = suma + resul[i];
            }
            var temp = document.getElementById("txtSuma");
            temp.value = "Sumatoria: " + suma;
            break;

        case "8":
            cuerpoTabla = document.getElementById("cuerpo");
            for (let i = 0; i < 8; i++) {
                templ = `
                    <tr>
                        <td id="rowIdentificador">` + (i + 1) + `</td>
                        <td id="rowDato">` + numeros[i] + `</td>
                        <td id="rowDatoOrdenado">` + numerosOrdenados[i] + `</td>`;
                if (numerosOrdenados[i] != numerosOrdenados[i - 1]) {
                    templ += `<td id="rowFrecuencia">` + frecuencias[numerosUnicos[contador]] + `</td>`;
                    sumaF = sumaF + frecuencias[numerosUnicos[contador]];
                    contador++;
                } else {
                    templ += `<td id="rowFrecuencia"></td>`;
                }
                if (resul[i] != 0) {
                    templ += `<td id="rowResultado">` + resul[i] + `</td>`;
                } else {
                    templ += `<td id="rowResultado"></td>`;
                }
                templ + - `</tr>`;
                cuerpoTabla.innerHTML += templ;
            }
            template = `
                <div class="col-md-6">
                    <input id="txtSuma" value="" readonly class="form-control form-control-line" />
                </div>`;
            sumaTabla.innerHTML = template;
            for (let i = 0; i < cantidad; i++) {
                suma = suma + resul[i];
            }
            var temp = document.getElementById("txtSuma");
            temp.value = "Sumatoria: " + suma;
            break;

        case "9":
            cuerpoTabla = document.getElementById("cuerpo");
            for (let i = 0; i < 9; i++) {
                templ = `
                    <tr>
                        <td id="rowIdentificador">` + (i + 1) + `</td>
                        <td id="rowDato">` + numeros[i] + `</td>
                        <td id="rowDatoOrdenado">` + numerosOrdenados[i] + `</td>`;
                if (numerosOrdenados[i] != numerosOrdenados[i - 1]) {
                    templ += `<td id="rowFrecuencia">` + frecuencias[numerosUnicos[contador]] + `</td>`;
                    sumaF = sumaF + frecuencias[numerosUnicos[contador]];
                    contador++;
                } else {
                    templ += `<td id="rowFrecuencia"></td>`;
                }
                if (resul[i] != 0) {
                    templ += `<td id="rowResultado">` + resul[i] + `</td>`;
                } else {
                    templ += `<td id="rowResultado"></td>`;
                }
                templ + - `</tr>`;
                cuerpoTabla.innerHTML += templ;
            }
            template = `
                <div class="col-md-6">
                    <input id="txtSuma" value="" readonly class="form-control form-control-line" />
                </div>`;
            sumaTabla.innerHTML = template;
            for (let i = 0; i < cantidad; i++) {
                suma = suma + resul[i];
            }
            var temp = document.getElementById("txtSuma");
            temp.value = "Sumatoria: " + suma;
            break;

        case "10":
            cuerpoTabla = document.getElementById("cuerpo");
            for (let i = 0; i < 10; i++) {
                templ = `
                    <tr>
                        <td id="rowIdentificador">` + (i + 1) + `</td>
                        <td id="rowDato">` + numeros[i] + `</td>
                        <td id="rowDatoOrdenado">` + numerosOrdenados[i] + `</td>`;
                if (numerosOrdenados[i] != numerosOrdenados[i - 1]) {
                    templ += `<td id="rowFrecuencia">` + frecuencias[numerosUnicos[contador]] + `</td>`;
                    sumaF = sumaF + frecuencias[numerosUnicos[contador]];
                    contador++;
                } else {
                    templ += `<td id="rowFrecuencia"></td>`;
                }
                if (resul[i] != 0) {
                    templ += `<td id="rowResultado">` + resul[i] + `</td>`;
                } else {
                    templ += `<td id="rowResultado"></td>`;
                }
                templ + - `</tr>`;
                cuerpoTabla.innerHTML += templ;
            }
            template = `
                <div class="col-md-6">
                    <input id="txtSuma" value="" readonly class="form-control form-control-line" />
                </div>`;
            sumaTabla.innerHTML = template;
            for (let i = 0; i < cantidad; i++) {
                suma = suma + resul[i];
            }
            var temp = document.getElementById("txtSuma");
            temp.value = "Sumatoria: " + suma;
            break;

        case "11":
            cuerpoTabla = document.getElementById("cuerpo");
            for (let i = 0; i < 11; i++) {
                templ = `
                    <tr>
                        <td id="rowIdentificador">` + (i + 1) + `</td>
                        <td id="rowDato">` + numeros[i] + `</td>
                        <td id="rowDatoOrdenado">` + numerosOrdenados[i] + `</td>`;
                if (numerosOrdenados[i] != numerosOrdenados[i - 1]) {
                    templ += `<td id="rowFrecuencia">` + frecuencias[numerosUnicos[contador]] + `</td>`;
                    sumaF = sumaF + frecuencias[numerosUnicos[contador]];
                    contador++;
                } else {
                    templ += `<td id="rowFrecuencia"></td>`;
                }
                if (resul[i] != 0) {
                    templ += `<td id="rowResultado">` + resul[i] + `</td>`;
                } else {
                    templ += `<td id="rowResultado"></td>`;
                }
                templ + - `</tr>`;
                cuerpoTabla.innerHTML += templ;
            }
            template = `
                <div class="col-md-6">
                    <input id="txtSuma" value="" readonly class="form-control form-control-line" />
                </div>`;
            sumaTabla.innerHTML = template;
            for (let i = 0; i < cantidad; i++) {
                suma = suma + resul[i];
            }
            var temp = document.getElementById("txtSuma");
            temp.value = "Sumatoria: " + suma;
            break;

        case "12":
            cuerpoTabla = document.getElementById("cuerpo");
            for (let i = 0; i < 12; i++) {
                templ = `
                    <tr>
                        <td id="rowIdentificador">` + (i + 1) + `</td>
                        <td id="rowDato">` + numeros[i] + `</td>
                        <td id="rowDatoOrdenado">` + numerosOrdenados[i] + `</td>`;
                if (numerosOrdenados[i] != numerosOrdenados[i - 1]) {
                    templ += `<td id="rowFrecuencia">` + frecuencias[numerosUnicos[contador]] + `</td>`;
                    sumaF = sumaF + frecuencias[numerosUnicos[contador]];
                    contador++;
                } else {
                    templ += `<td id="rowFrecuencia"></td>`;
                }
                if (resul[i] != 0) {
                    templ += `<td id="rowResultado">` + resul[i] + `</td>`;
                } else {
                    templ += `<td id="rowResultado"></td>`;
                }
                templ + - `</tr>`;
                cuerpoTabla.innerHTML += templ;
            }
            template = `
                <div class="col-md-6">
                    <input id="txtSuma" value="" readonly class="form-control form-control-line" />
                </div>`;
            sumaTabla.innerHTML = template;
            for (let i = 0; i < cantidad; i++) {
                suma = suma + resul[i];
            }
            var temp = document.getElementById("txtSuma");
            temp.value = "Sumatoria: " + suma;
            break;

        case "13":
            cuerpoTabla = document.getElementById("cuerpo");
            for (let i = 0; i < 13; i++) {
                templ = `
                    <tr>
                        <td id="rowIdentificador">` + (i + 1) + `</td>
                        <td id="rowDato">` + numeros[i] + `</td>
                        <td id="rowDatoOrdenado">` + numerosOrdenados[i] + `</td>`;
                if (numerosOrdenados[i] != numerosOrdenados[i - 1]) {
                    templ += `<td id="rowFrecuencia">` + frecuencias[numerosUnicos[contador]] + `</td>`;
                    sumaF = sumaF + frecuencias[numerosUnicos[contador]];
                    contador++;
                } else {
                    templ += `<td id="rowFrecuencia"></td>`;
                }
                if (resul[i] != 0) {
                    templ += `<td id="rowResultado">` + resul[i] + `</td>`;
                } else {
                    templ += `<td id="rowResultado"></td>`;
                }
                templ + - `</tr>`;
                cuerpoTabla.innerHTML += templ;
            }
            template = `
                <div class="col-md-6">
                    <input id="txtSuma" value="" readonly class="form-control form-control-line" />
                </div>`;
            sumaTabla.innerHTML = template;
            for (let i = 0; i < cantidad; i++) {
                suma = suma + resul[i];
            }
            var temp = document.getElementById("txtSuma");
            temp.value = "Sumatoria: " + suma;
            break;

        case "14":
            cuerpoTabla = document.getElementById("cuerpo");
            for (let i = 0; i < 14; i++) {
                templ = `
                    <tr>
                        <td id="rowIdentificador">` + (i + 1) + `</td>
                        <td id="rowDato">` + numeros[i] + `</td>
                        <td id="rowDatoOrdenado">` + numerosOrdenados[i] + `</td>`;
                if (numerosOrdenados[i] != numerosOrdenados[i - 1]) {
                    templ += `<td id="rowFrecuencia">` + frecuencias[numerosUnicos[contador]] + `</td>`;
                    sumaF = sumaF + frecuencias[numerosUnicos[contador]];
                    contador++;
                } else {
                    templ += `<td id="rowFrecuencia"></td>`;
                }
                if (resul[i] != 0) {
                    templ += `<td id="rowResultado">` + resul[i] + `</td>`;
                } else {
                    templ += `<td id="rowResultado"></td>`;
                }
                templ + - `</tr>`;
                cuerpoTabla.innerHTML += templ;
            }
            template = `
                <div class="col-md-6">
                    <input id="txtSuma" value="" readonly class="form-control form-control-line" />
                </div>`;
            sumaTabla.innerHTML = template;
            for (let i = 0; i < cantidad; i++) {
                suma = suma + resul[i];
            }
            var temp = document.getElementById("txtSuma");
            temp.value = "Sumatoria: " + suma;
            break;

        case "15":
            cuerpoTabla = document.getElementById("cuerpo");
            for (let i = 0; i < 15; i++) {
                templ = `
                    <tr>
                        <td id="rowIdentificador">` + (i + 1) + `</td>
                        <td id="rowDato">` + numeros[i] + `</td>
                        <td id="rowDatoOrdenado">` + numerosOrdenados[i] + `</td>`;
                if (numerosOrdenados[i] != numerosOrdenados[i - 1]) {
                    templ += `<td id="rowFrecuencia">` + frecuencias[numerosUnicos[contador]] + `</td>`;
                    sumaF = sumaF + frecuencias[numerosUnicos[contador]];
                    contador++;
                } else {
                    templ += `<td id="rowFrecuencia"></td>`;
                }
                if (resul[i] != 0) {
                    templ += `<td id="rowResultado">` + resul[i] + `</td>`;
                } else {
                    templ += `<td id="rowResultado"></td>`;
                }
                templ + - `</tr>`;
                cuerpoTabla.innerHTML += templ;
            }
            template = `
                <div class="col-md-6">
                    <input id="txtSuma" value="" readonly class="form-control form-control-line" />
                </div>`;
            sumaTabla.innerHTML = template;
            for (let i = 0; i < cantidad; i++) {
                suma = suma + resul[i];
            }
            var temp = document.getElementById("txtSuma");
            temp.value = "Sumatoria: " + suma;
            break;

        default:
            template = `
            <div class="alert alert-info alert-danger">                
                <p> Error: El ordenamiento fue incorrecto. </p>
            </div>
            `;
            tablaFrecuencia.innerHTML = template;
    }

    media = suma / sumaF;

    template = `
    <div class="col-md-6">
        <input id="txt" value="" readonly class="form-control form-control-line" />
    </div>`;
    resultados.innerHTML = template;
    var temp = document.getElementById("txt");
    temp.value = "x̄ = " + suma + "/" + sumaF + " x̄ = " + media.toFixed(2);

    grafico(numerosOrdenados);
}

ordenar = () => {

    let cantidad = txtCantidad.value;

    switch (cantidad) {

        case "7":
            for (let i = 0; i < 7; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
                numerosOrdenados[i] = temp.value;
            }
            numerosOrdenados.sort();
            break;

        case "8":
            for (let i = 0; i < 8; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
                numerosOrdenados[i] = temp.value;
            }
            numerosOrdenados.sort();
            break;

        case "9":
            for (let i = 0; i < 9; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
                numerosOrdenados[i] = temp.value;
            }
            numerosOrdenados.sort();
            break;

        case "10":
            for (let i = 0; i < 10; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
                numerosOrdenados[i] = temp.value;
            }
            numerosOrdenados.sort();
            break;

        case "11":
            for (let i = 0; i < 11; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
                numerosOrdenados[i] = temp.value;
            }
            numerosOrdenados.sort();
            break;

        case "12":
            for (let i = 0; i < 12; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
                numerosOrdenados[i] = temp.value;
            }
            numerosOrdenados.sort();
            break;

        case "13":
            for (let i = 0; i < 13; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
                numerosOrdenados[i] = temp.value;
            }
            numerosOrdenados.sort();
            break;

        case "14":
            for (let i = 0; i < 14; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
                numerosOrdenados[i] = temp.value;
            }
            numerosOrdenados.sort();
            break;

        case "15":
            for (let i = 0; i < 15; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
                numerosOrdenados[i] = temp.value;
            }
            numerosOrdenados.sort();
            break;
    }

}

sacarFrecuencia = () => {

    numerosOrdenados.forEach(function (numero) {
        frecuencias[numero] = (frecuencias[numero] || 0) + 1;
    });

}

sacarResultado = () => {

    let cantidad = txtCantidad.value;
    let contador = 0;

    const numerosUnicos = [...new Set(numerosOrdenados)];

    for (let i = 0; i < cantidad; i++) {
        if (numerosOrdenados[i] != numerosOrdenados[i - 1]) {
            resul[i] = numerosOrdenados[i] * frecuencias[numerosUnicos[contador]];
            contador++;
        } else {
            resul[i] = 0;
        }
    }

}

//mediana = () => {

//    var half = Math.floor(numeros.length / 2);
//    var num = [];

//    for (let i = 0; i < numeros.length; i++) {
//        num[i] = parseInt(numeros[i]);
//    }

//    if (numeros.length % 2) {
//        med = num[half];
//    } else {
//        med = (num[half - 1] + num[half]) / 2.0;
//    }
        
//}