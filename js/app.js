var cryptoCanvas = document.getElementById('cryptochart').getContext('2d');
var stockCanvas = document.getElementById('stockchart').getContext('2d');
var morgageCanvas = document.getElementById('morgagechart').getContext('2d');
var middleEastCanvas = document.getElementById('middleEastchart').getContext('2d');
var lossCompanyCanvas = document.getElementById('lossCompany').getContext('2d');
var profitCompanyCanvas = document.getElementById('profitComapny').getContext('2d');

cryptoData = {
    type: 'bar',
    data: {
        labels: ['Either', 'Bitcoin', 'LiteCoin', 'Ripple', 'Dash', 'DogeCoin'],
        datasets: [{
            label: 'Cryptocurrency',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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

stockData = {
    type: 'line',
    data: {
        labels: ['Apple', 'CitiGroup', 'General Electric', 'Google', 'MicroSoft'],
        datasets: [{
            label: 'Most Popular Stock',
            data: [282.88, 45.41, 6.88, 1280.53, 178.0],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }

    }
}

currencyData = {
    type: 'line',
    data: {
        labels: ['Euro', 'British pound', 'Japanese Yen', 'Canadian Dollar', 'Chinese Yuan'],
        datasets: [{
            label: 'Currencies Rate in Dollar',
            data: [1.09, 1.25, 0.00107, 0.71, 0.07],
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }

    }
}

middleEastData = {
    type: 'radar',
    data: {
        labels: ['Oil', 'Gold', 'Silver', 'Bitcoin', ],
        datasets: [{
            label: 'Middle East Market in Dollar',
            data: [2.6, 56, 10, 900],
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }

    }
}

lostData = {
    type: 'line',
    data: {
        labels: ['UnitedHealth Group', 'Centene Crop', 'Clorox CO', 'Campbell Soup CO', 'Anthem Inc'],
        datasets: [{
            label: 'Company Who running on Loss by %',
            showLine: false,
            pointRadius: 10,
            data: [2.6, 2.14, 1.52, 1.51, 1.48],
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }

    }
}

profitData = {
    type: 'line',
    data: {
        labels: ['HollyFrontier Corp', 'Marathon P corp', 'Cititzens Fin Grp INC', 'Comerica INC', 'Valero Energy CP'],
        datasets: [{
            label: 'Company Who running on Profit by %',
            showLine: false,
            pointRadius: 10,
            data: [17.12, 15.95, 15.95, 15.16, 10.43],
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }

    }
}

var myCryptoChart = new Chart(cryptoCanvas, cryptoData);
var myStockChart = new Chart(stockCanvas, stockData);
var myMorgageChart = new Chart(morgageCanvas, currencyData);
var mymiddleeast = new Chart(middleEastCanvas, middleEastData)
var mylostData = new Chart(lossCompanyCanvas, lostData);
var myProfitData = new Chart(profitCompanyCanvas, profitData);