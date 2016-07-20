/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#Probe-Tone-Timing-Judgements').highcharts({
    chart: {
        type: 'column',
    },
    title: {
        text: 'Probe-Tone-Timing-Judgements'
    },
    xAxis: {
        title: {
            text: 'Probe Tone Offset (% of IOI)'
        },
        categories: ['-30', '-15', '0', '15', '30'],
        crosshair: true
    },
    yAxis: {
        title: {
            text: '% Correct'
        },
        min: 0, max: 100
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">Probe Tone Offset: {point.key}</span><br>',
        shared: true,
    },
    series: [{
        name: 'Movement',
        color: 'blue',
        data: [79, 38, 80, 63, 83],
        tooltip: {
            pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}% </b>'
        }
    }, {
        name: 'Movement error',
        type: 'errorbar',
        data: [[77,82],[36,41],[79,81],[60,68],[80,89]],
        tooltip: {
            pointFormat: '(error range: {point.low}-{point.high}%)<br>'
        }
    }, {
        name: 'No-Movement',
        color: 'red',
        data: [70, 39, 77, 30, 57],
        tooltip: {
            pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}% </b>'
        }
    }, {
        name: 'No-Movement error',
        type: 'errorbar',
        data: [[63,76],[35,42],[76,79],[27,33],[52,62]],
        tooltip: {
            pointFormat: '(error range: {point.low}-{point.high}%)<br>'
        }

    }]
});
});