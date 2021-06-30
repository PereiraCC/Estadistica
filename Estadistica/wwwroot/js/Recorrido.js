
let campos = document.getElementById("Campos");
let camposOrdenados = document.getElementById("CamposOrdenados");
let resultados = document.getElementById("Resultados");
let txtCantidad = document.getElementById("txtCantidad");
var numeros = new Array();

definirCantidadDigitos = () => {

    let cantidad = txtCantidad.value;
    let template = ``;

    switch (cantidad) {

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

        case "16":
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
            <div class="col-md-1">
                <input id="txtCampo16" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "17":
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
            <div class="col-md-1">
                <input id="txtCampo16" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo17" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "18":
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
            <div class="col-md-1">
                <input id="txtCampo16" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo17" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo18" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "19":
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
            <div class="col-md-1">
                <input id="txtCampo16" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo17" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo18" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo19" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-2">
                <div class="text-end upgrade-btn">
                    <a  onclick="ordenarDigitos()" class="btn btn-primary text-white">Establecer & Ordenar</a>
                </div>
            </div>`;
            campos.innerHTML = template;
            break;

        case "20":
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
            <div class="col-md-1">
                <input id="txtCampo16" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo17" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo18" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo19" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampo20" type="number" placeholder="#" min="0" max="99" class="form-control form-control-line" />
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
                <p> Error: La cantidad de digitos debe ser un rango entre 12 y 20 </p>
            </div>
            `;
            campos.innerHTML = template;
    }
}

ordenarDigitos = () => {

    let cantidad = txtCantidad.value;
    let template = ``;
    var sup = 0;
    var inf = 0;
    var r = 0;

    ordenar();

    switch (cantidad) {

        case "12":
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
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado11" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado12" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 12; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "13":
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
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado11" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado12" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado13" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 13; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "14":
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
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado11" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado12" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado13" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado14" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 14; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "15":
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
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado11" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado12" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado13" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado14" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado15" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 15; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "16":
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
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado11" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado12" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado13" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado14" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado15" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado16" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 16; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "17":
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
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado11" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado12" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado13" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado14" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado15" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado16" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado17" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 17; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "18":
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
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado11" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado12" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado13" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado14" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado15" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado16" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado17" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado18" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 18; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "19":
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
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado11" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado12" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado13" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado14" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado15" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado16" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado17" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado18" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado19" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 19; i++) {
                var nombre = "txtCampoOrdenado" + (i + 1);
                var temp = document.getElementById(nombre);
                temp.value = numeros[i];
            }
            break;

        case "20":
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
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado11" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado12" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado13" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado14" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado15" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado16" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado17" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado18" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado19" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>
            <div class="col-md-1">
                <input id="txtCampoOrdenado20" type="number" placeholder="#" value="" readonly class="form-control form-control-line" />
            </div>`;
            camposOrdenados.innerHTML = template;
            for (let i = 0; i < 20; i++) {
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

    sup = numeros[cantidad - 1];
    inf = numeros[0];
    r = sup - inf;

    template = `
    <div class="col-md-6">
        <input id="txt" value="" readonly class="form-control form-control-line" />
    </div>`;
    resultados.innerHTML = template;
    var temp = document.getElementById("txt");
    temp.value = "R = " + sup + " - " + inf + " =  R = " + r; 

    grafico(numeros);
}

ordenar = () => {

    let cantidad = txtCantidad.value;

    switch (cantidad) {

        case "12":
            for (let i = 0; i < 12; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "13":
            for (let i = 0; i < 13; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "14":
            for (let i = 0; i < 14; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "15":
            for (let i = 0; i < 15; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "16":
            for (let i = 0; i < 16; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "17":
            for (let i = 0; i < 17; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "18":
            for (let i = 0; i < 18; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "19":
            for (let i = 0; i < 19; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;

        case "20":
            for (let i = 0; i < 20; i++) {
                var nombre = "txtCampo" + (i + 1);
                var temp = document.getElementById(nombre);
                numeros[i] = temp.value;
            }
            numeros.sort();
            break;
    }

}