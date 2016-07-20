/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#QJEP-2016-fig3-3').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'Training required' // TITLE
        },
        plotOptions: {
            column: {
                borderColor: '#000000',
                borderWidth: 1
            }
        },
        xAxis: {
            title: {
                text: 'Amplitude envelope' // X-AXIS LABEL
            },
            categories: ["Percussive", "Flat"], // X-AXIS CATEGORIES
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Blocks to reach criterion' // Y-AXIS LABEL
            },
            min: 0, max: 4 // Y-AXIS SCALE
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {enabled: false},
        series: [{
            // First category of Data
            name: 'Data',
            color: 'grey',
            data: [{y: 1.7, color: 'white'}, 2.9],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[1.4, 1.9], [2.5, 3.3]], //min t0 max
            // Next category?

        }]
    });
});