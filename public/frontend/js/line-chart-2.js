/*==== line chart =====*/
var ctx = document.getElementById('line-chart-2');
Chart.defaults.global.defaultFontFamily = 'Mukta';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#E67647';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "Label",
            data: [10, 40, 38, 35, 50, 55, 40, 43, 60, 50, 60, 70],
            backgroundColor: 'rgba(255, 131, 79, 0.05)',
            borderColor: '#ff834f',
            pointBorderColor: '#ffffff',
            pointBackgroundColor: '#ff834f',
            pointBorderWidth: 2,
            pointRadius: 4

        }
        ]
    },

    // Configuration options go here
    options: {
        tooltips: {
            xPadding: 12,
            yPadding: 12,
            backgroundColor: '#2e3d62'
        },
        legend: {
            display: false,
            tooltips: {
                displayColors:false,
            }
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: '#eee',
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: '#eee',
                },
                ticks: {
                    fontSize: 14,
                }
            }]

        }
    }
});
