/**
 * Created by kyle on 2016-07-20.
 */
$(document).ready(function () {
    $('#QJEP-2016-fig2-2').highcharts({
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
            categories: ["Percussive","Flat"], // X-AXIS CATEGORIES
            crosshair: true
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
        tooltip: { enabled: false },
        series: [{
            // First category of Data
            name: 'Data',
            color: 'grey',
            data: [{y: 52.9, color: 'white'},32.67],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[45, 61], [29, 36]], //min t0 max
            // Next category?

        }]
    });
});