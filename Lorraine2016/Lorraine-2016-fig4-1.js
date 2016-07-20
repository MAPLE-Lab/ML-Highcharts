/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#Lorraine-2016-fig4-1').highcharts({
        chart: {
            type: 'line',
        },
        title: {
            text: 'Musician with Cello Visual condition'
        },
        xAxis: {
            title: {
                text: 'SOA (ms)'
            },
            min: -300, max: 300,
            crosshair: true,
            gridLineWidth: 2,
            minorTickInterval: 50,
        },
        yAxis: {
            title: {
                text: 'P(Vision First) Responses'
            },
            min: 0, max: 1,
            gridLineWidth: 2,
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">SOA: {point.key}ms</span><br>',
            shared: true,
        },
        legend: {
            enabled: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Matched',
            color: 'green',
            data: [[-300, 0.24], [-200, 0.35], [-120, 0.4], [-90, 0.45], [0, 0.52], [90, 0.7], [120, 0.8], [200, 0.86], [300, 0.9]],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.2f}% </b>'
            }
        }, {
            name: 'Mismatched',
            color: 'blue',
            dashStyle: 'longdash',
            data: [[-300, 0.1], [-200, 0.2], [-120, 0.2], [-90, 0.24], [0, 0.45], [90, 0.51], [120, 0.59], [200, 0.86], [300, 0.95]],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.2f}% </b>'
            }
        }]
    });
});