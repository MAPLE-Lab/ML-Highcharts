/**
 * Created by Kyle on 2016-07-14.
 */
$(document).ready(function () {
    $('#QJEP-2016-Figure2').css({
        "left": "250px",
        "position": "relative"
    });
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
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Old/new sensitivity (d prime)' // Y-AXIS LABEL
            },
            min: 0, max: 2.5 // Y-AXIS SCALE
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
    $('#QJEP-2016-fig2-1').css({
        "left": "-150px",
        "position": "absolute"
    });
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
    $('#QJEP-2016-fig2-2').css({
        "left": "150px",
        "position": "absolute"
    });
});