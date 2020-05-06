var market_chart = document.getElementById('market_chart').getContext('2d')
var pichart1Canvas = document.getElementById('p1').getContext('2d')
var pichart2Canvas = document.getElementById('p2').getContext('2d')
var pichart3Canvas = document.getElementById('p3').getContext('2d')




cryptoData = {
    type: 'bar',
    data: {
        labels: ['Apple', 'Google', 'Netflix', 'Amazon', 'Samsung', ],
        datasets: [{
            label: 'Advancers Company',
            data: [12, 19, 12, 5, 8, 9],
            backgroundColor: [

                'green',
                'blue',
                'red',
                'brown',
                'coral',

            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black',
                'black',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

    }
}

recreation = {
    type: 'pie',
    data: {
        labels: ['Nautilus', 'Jhonson Outdoor', 'Peloton Internal', 'Winnebago Inds', 'LCI Industies'],
        datasets: [{
            label: 'Recreational Products',
            data: [10.30, 8.25, 6.84, 8.71, 6.27],
            backgroundColor: [
                'rgb(255, 99, 132 )',
                'rgb(54, 162, 235 )',
                'rgb(255, 206, 86 )',
                'rgb(75, 192, 192 )',
                'rgb(153, 102, 255 )',
                'rgb(255, 159, 64 )'
            ],
            borderColor: [
                'rgb(255, 99, 132 )',
                'rgb(54, 162, 235 )',
                'rgb(255, 206, 86 )',
                'rgb(75, 192, 192 )',
                'rgb(153, 102, 255 )',
                'rgb(255, 159, 64 )'
            ],
            borderWidth: 1
        }]
    },

}


personal = {
    type: 'pie',
    data: {
        labels: ['Aspen Group', 'GSX Techedu ', ' Bright Horizon', 'Tal Education', 'Puxin LTD'],
        datasets: [{
            label: 'Personal Service',
            data: [6.32, 5.81, 5.34, 5.04, 9.03],
            backgroundColor: [
                'rgb(255, 206, 86 )',
                'rgb(75, 192, 192 )',
                'rgb(153, 102, 255 )',
                'rgb(255, 99, 132 )',
                'rgb(54, 162, 235 )',

                'rgb(255, 159, 64 )'
            ],
            borderColor: [
                'rgb(255, 206, 86 )',
                'rgb(75, 192, 192 )',
                'rgb(153, 102, 255 )',
                'rgb(255, 99, 132 )',
                'rgb(54, 162, 235 )',

                'rgb(255, 159, 64 )'
            ],
            borderWidth: 1
        }]
    },

}


finance = {
    type: 'pie',
    data: {
        labels: ['Yin Tech', 'Market Axess ', ' Marathon Patent', 'GreenSky', 'Cboe Glo Market'],
        datasets: [{
            label: 'Personal Service',
            data: [7.02, 5.73, 4.75, 5.63, 6.68],
            backgroundColor: [
                'rgb(255, 206, 86 )',
                'rgb(75, 192, 192 )',
                'rgb(153, 102, 255 )',
                'rgb(255, 99, 132 )',
                'rgb(54, 162, 235 )',

                'rgb(255, 159, 64 )'
            ],
            borderColor: [
                'rgb(255, 206, 86 )',
                'rgb(75, 192, 192 )',
                'rgb(153, 102, 255 )',
                'rgb(255, 99, 132 )',
                'rgb(54, 162, 235 )',

                'rgb(255, 159, 64 )'
            ],
            borderWidth: 1
        }]
    },

}

var newwchart = new Chart(market_chart, cryptoData)
var pieChart1 = new Chart(pichart1Canvas, recreation)
var pieChart2 = new Chart(pichart2Canvas, personal)
var pieChart3 = new Chart(pichart3Canvas, finance)