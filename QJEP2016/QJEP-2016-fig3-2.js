/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#QJEP-2016-fig3-2').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'Recall of objects' // TITLE
        },
        xAxis: {
            title: {
                text: 'Amplitude envelope' // X-AXIS LABEL
            },
            categories: ["Percussive", "Flat"], // X-AXIS CATEGORIES
            crosshair: true
        },
        plotOptions: {
            column: {
                borderColor: '#000000',
                borderWidth: 1
            }
        },
        yAxis: {
            title: {
                text: 'As a percentage of sequences recognized' // Y-AXIS LABEL
            },
            min: 0, max: 70 // Y-AXIS SCALE
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
            data: [{y: 60, color: 'white'}, 58],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[52.5, 69], [52, 65]], //min t0 max
            // Next category?

        }]
    });
});