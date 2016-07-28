/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    Highcharts.setOptions({
        colors: ['#4d79ff', '#ff4d4d', '#5cd65c', '#cc66ff']
    });
    $('#AmpEnvPie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Effects of amplitude envelopes in Temporal Order Judgement tasks'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Amplitude Envelopes',
            colorByPoint: true,
            data: [{
                name: 'Percussive',
                y: 26.0
            }, {
                name: 'Non-Flat',
                y: 11.7,
            }, {
                name: 'Flat',
                y: 27.8
            }, {
                name: 'Not Specified',
                y: 34.5,
                sliced: true,
                selected: true,
            }]
        }]
    });
    $('#AmpEnvPie-Figure').css({
        "position": "relative"
    });
});