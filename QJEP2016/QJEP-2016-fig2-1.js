/**
 * Created by kyle on 2016-07-20.
 */
$(document).ready(function () {
    $('#QJEP-2016-fig2-1').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'Recognition of Sequences' // TITLE
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
            crosshair: true,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            lineColor: 'transparent',
            lineWidth: 0,
        },
        yAxis: {
            title: {
                text: 'Old/new sensitivity (d prime)' // Y-AXIS LABEL
            },
            min: 0, max: 2.5, // Y-AXIS SCALE
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            lineColor: 'transparent',
            lineWidth: 0,
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
            data: [{y: 1.01, color: 'white'},0.8807],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[0.75, 1.3], [0.6, 1.2]], //min t0 max
            // Next category?

        }]
    });
});