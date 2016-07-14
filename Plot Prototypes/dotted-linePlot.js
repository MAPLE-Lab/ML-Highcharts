/**
 * Created by Kyle on 2016-07-14.
 */
$(document).ready(function () {
    $('#Manning13-exp2').highcharts({
        chart: {
            type: 'line',
        },
        title: {
            text: 'Manning 2013 Experiment 2'
        },
        xAxis: {
            title: {
                text: 'Probe Tone Offset (% of IOI)'
            },
            categories: ['-30', '-15', '0', '15', '30'],
            crosshair: true
        },
        yAxis: {
            min: 20, max: 100
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">Probe Tone Offset: {point.key}</span><br>',
            shared: true,
        },
        series: [{
            name: 'Movement',
            color: 'blue',
            data: [39, 60, 70, 59, 42],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}% </b>'
            }
        }, {
            name: 'Movement error',
            color: 'blue',
            type: 'errorbar',
            data: [[30, 44], [50, 70], [68, 72], [54, 64], [38, 47]],
            tooltip: {
                pointFormat: '(error range: {point.low}-{point.high}%)<br>'
            }
        }, {
            name: 'No-Movement',
            color: 'red',
            data: [41, 60, 66, 70, 43],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}% </b>'
            }
        }, {
            name: 'No-Movement error',
            color: 'red',
            type: 'errorbar',
            data: [[32, 46], [51, 69], [64, 69], [63, 75], [38, 56]],
            tooltip: {
                pointFormat: '(error range: {point.low}-{point.high}%)<br>'
            }

        }]
    });
});