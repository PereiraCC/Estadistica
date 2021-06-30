
//import { Chart } from 'chart.js';

grafico = (numeros) => {

    const numerosUnicos = [...new Set(numeros)];

    var repetidos = new Array(numerosUnicos.length);
    var repetidos2 = new Array(numerosUnicos.length);

    numeros.forEach(function (numero) {
        repetidos[numero] = (repetidos[numero] || 0) + 1;
    });

    for (let i = 0; i < numerosUnicos.length; i++) {
        repetidos2[i] = repetidos[numerosUnicos[i]];
    }

    var ctx = document.getElementById('MiGrafica').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: numerosUnicos,
            datasets: [{
                label: 'Grafico de Media Aritmética Ponderada = x̄ del conjunto de datos',
                data: repetidos2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },

    });

}

module.exports = {
    grafico
}