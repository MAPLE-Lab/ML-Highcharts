/**
 * Created by Kyle on 2016-07-14.
 */
$(document).ready(function () {
    $('#QJEP-2016-Figure4').css({
        "left": "250px",
        "top": "800px",
        "position": "relative"
    });
    $('#QJEP-2016-fig4-1').highcharts({
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
            categories: ["Percussive","Flat", "Reverse"], // X-AXIS CATEGORIES
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
            data: [{y: 1.4, color: 'white'},1.1,{y: 1, color: 'black'}],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[1.3, 1.5], [0.75, 1.4],[0.75,1.25]], //min t0 max
            // Next category?

        }]
    });
    $('#QJEP-2016-fig4-1').css({
        "left": "-150px",
        "position": "absolute"
    });
    $('#QJEP-2016-fig4-2').highcharts({
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
            categories: ["Percussive","Flat","Reveres"], // X-AXIS CATEGORIES
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Percentage of items correctly recalled' // Y-AXIS LABEL
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
            data: [{y: 52, color: 'white'},45,{y: 39, color: 'black'}],
        }, {
            name: 'Data error',
            type: 'errorbar',
            data: [[48, 59], [42, 47],[36,42]], //min t0 max
            // Next category?

        }]
    });
    $('#QJEP-2016-fig4-2').css({
        "left": "150px",
        "position": "absolute"
    });
});