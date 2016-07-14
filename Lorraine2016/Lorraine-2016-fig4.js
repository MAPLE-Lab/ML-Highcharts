/**
 * Created by Kyle on 2016-07-14.
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
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'P(Vision First) Responses'
            },
            min: 0, max: 1
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">Probe Tone Offset: {point.key}</span><br>',
            shared: true,
        },
        series: [{
            name: 'Movement',
            color: 'blue',
            data: [[-300,0.24],[-200,0.35],[-120,0.40],[-90,0.45],[0,0.52],[90,0.70],[120,0.8],[[300,0.9]],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}% </b>'
            }
        }]
    });
    $('#Lorraine-2016-Figure4').css({
        "left": "250px",
        "top": "1200px",
        "position": "relative"
    });
});