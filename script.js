const options = {
    chart: {
        type: 'area',
        height: 300,
        toolbar: { show: false},
    },

    colors: ['#3498db'],
    series: [{ name: 'Precipitation', data: [1888.86, 1787.84, 1630.94, 1672.84, 1761.59]}],
    dataLabels: { enabled: false},
    stroke: {
        show: true,
        curve: 'smooth',
        colors: undefined,
        width: 3,
    },

    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 90, 200],
        },
    },

    xaxis: {
        categories: ['2017', '2018', '2019', '2020', '2021'],
        axisBorder: {show: true},
        labels: {
            style: {
                colors: '#a7a7a7',
                fontFamily: 'Poppins',
            }
        }
    },

    yaxis: { show: true, axisBorder:{show:true},},
    grid: { borderColor: 'rgba(0, 0, 0, 0)', padding: {top: -30, bottom: -8, right: 12, left: 12} },
    tooltip: {
        disabled: true,
        y: { formatter: value => `${value}mm`},
        style: {fontFamily: 'Poppins'},
    },
    markers: {show: false},

    

};

const chart = new ApexCharts(document.querySelector('.chart-area'), options);
chart.render();