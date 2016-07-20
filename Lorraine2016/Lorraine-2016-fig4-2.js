/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#Lorraine-2016-fig4-2').highcharts({
        chart: {
            type: 'line',
        },
        title: {
            text: 'Musician with Marimba Visual condition'
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
            data: [[-300, 0.24], [-200, 0.29], [-120, 0.31], [-90, 0.48], [0, 0.62], [90, 0.81], [120, 0.81], [200, 0.9], [300, 0.88]],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.2f}% </b>'
            }
        }, {
            name: 'Mismatched',
            color: 'blue',
            dashStyle: 'longdash',
            data: [[-300, 0.16], [-200, 0.24], [-120, 0.39], [-90, 0.55], [0, 0.78], [90, 0.85], [120, 0.88], [200, 0.91], [300, 0.92]],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.2f}% </b>'
            }
        }]
    });
});