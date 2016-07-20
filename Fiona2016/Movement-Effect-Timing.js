/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#Movement-Effect-Timing').highcharts({
    chart: {
        type: 'column',
    },
    title: {
        text: 'Effect of Movement on Probe Tone Timing judgements'
    },
    xAxis: {
        categories: ['AF', 'NAF',],
        crosshair: true
    },
    yAxis: {
        title: {
            text: 'Effect of Movement'
        },
        min: -0.1, max: 0.3
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">Probe Tone Offset: {point.key}</span><br>',
        shared: true,
    },
    series: [{
        name: 'On-Time',
        color: 'blue',
        data: [0.19,0.14],
        tooltip: {
            pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}% </b>'
        }
    }, {
        name: 'Movement error',
        type: 'errorbar',
        data: [[0.15,0.23],[0.12,0.18]],
        tooltip: {
            pointFormat: '(error range: {point.low}-{point.high}%)<br>'
        }
    }, {
        name: 'No-Movement',
        color: 'red',
        data: [0.15, 0.05],
        tooltip: {
            pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}% </b>'
        }
    }, {
        name: 'No-Movement error',
        type: 'errorbar',
        data: [[0.12,0.22],[0.11,0.01]],
        tooltip: {
            pointFormat: '(error range: {point.low}-{point.high}%)<br>'
        }

    }]
});
});