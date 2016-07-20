/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#QJEP-2016-fig3-1').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'Recognition of Sequences' // TITLE
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
                text: 'Old/new sensitivity (d prime)' // Y-AXIS LABEL
            },
            min: 0, max: 2.5 // Y-AXIS SCALE
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
            data: [{y: 2.1, color: 'white'}, 1.8],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[1.9, 2.4], [1.6, 2.1]], //min t0 max
            // Next category?

        }]
    });
});