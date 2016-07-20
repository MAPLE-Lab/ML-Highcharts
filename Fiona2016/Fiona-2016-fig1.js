/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#Moving-Improves-Performance').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Moving Improves Performance'
        },
        xAxis: {
            categories: ['Early', 'On-Time', 'Late']
        },
        yAxis: {
            title: {
                text: 'Proportion of correct responses (%)'
            }
        },
        series: [{
            name: 'Movement',
            color: 'blue',
            data: [56, 79, 76]
        }, {
            name: 'Movement error',
            type: 'errorbar',
            data: [[51,63],[76,82],[70,81]]
        }, {
            name: 'No-Movement',
            color: 'red',
            data: [53,75,42]
        }, {
            name: 'No-Movement error',
            type: 'errorbar',
            data: [[49,60],[71,79],[36,50]]

        }]
    });
    $('#Moving-Increases-Confidence').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'Moving Increases Confidence'
        },
        xAxis: {
            categories: ['Early', 'On-Time', 'Late']
        },
        yAxis: {
            title: {
                text: 'Mean Confidence Rating (1-5)'
            },
            min: 3, max: 5
        },
        series: [{
            name: 'Movement',
            color: 'blue',
            data: [4.3, 4.1, 4.2],
        }, {
            name: 'Movement error',
            type: 'errorbar',
            data: [[4.2,4.4],[3.8,4.3],[4.0,4.4]]
        }, {
            name: 'No-Movement',
            color: 'red',
            data: [3.8,3.8,3.9],
        }, {
            name: 'No-Movement error',
            type: 'errorbar',
            data: [[3.7,4.1],[3.7,4.1],[3.8,4.1]]

        }]
    });
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
            data: [[30,44],[50,70],[68,72],[54,64],[38,47]],
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
            data: [[32,46],[51,69],[64,69],[63,75],[38,56]],
            tooltip: {
                pointFormat: '(error range: {point.low}-{point.high}%)<br>'
            }

        }]
    });
});

