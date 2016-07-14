/**
 * Created by Kyle on 2016-07-14.
 */
$(document).ready(function () {

    $('#QJEP-2016-Figure3').css({
        "left": "500px",
        "top": "400px",
        "position": "relative"
    });
    $('#QJEP-2016-fig3-1').highcharts({
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
            data: [{y: 2.1, color: 'white'},1.8],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[1.9, 2.4], [1.6, 2.1]], //min t0 max
            // Next category?

        }]
    });
    $('#QJEP-2016-fig3-1').css({
        "left": "-300px",
        "position": "absolute"
    });
    $('#QJEP-2016-fig3-2').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'Recall of objects' // TITLE
        },
        xAxis: {
            title: {
                text: 'Amplitude envelope' // X-AXIS LABEL
            },
            categories: ["Percussive","Flat"], // X-AXIS CATEGORIES
            crosshair: true
        },
        plotOptions: {
            column: {
                borderColor: '#000000',
                borderWidth: 1
            }
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
            data: [{y: 60, color: 'white'},58],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[52.5, 69], [52, 65]], //min t0 max
            // Next category?

        }]
    });
    $('#QJEP-2016-fig3-2').css({
        "left": "0px",
        "position": "absolute"
    });
    $('#QJEP-2016-fig3-3').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'Training required' // TITLE
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
                text: 'Blocks to reach criterion' // Y-AXIS LABEL
            },
            min: 0, max: 4 // Y-AXIS SCALE
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
            data: [{y: 1.7, color: 'white'},2.9],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[1.4, 1.9], [2.5, 3.3]], //min t0 max
            // Next category?

        }]
    });
    $('#QJEP-2016-fig3-3').css({
        "left": "300px",
        "position": "absolute"
    });
});