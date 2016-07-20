/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#QJEP-2016-fig4-2').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'Recall of objects' // TITLE
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
            categories: ["Percussive", "Flat", "Reveres"], // X-AXIS CATEGORIES
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Percentage of items correctly recalled' // Y-AXIS LABEL
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
            data: [{y: 52, color: 'white'}, 45, {y: 39, color: 'black'}],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[48, 59], [42, 47], [36, 42]], //min t0 max
            // Next category?

        }]
    });
});