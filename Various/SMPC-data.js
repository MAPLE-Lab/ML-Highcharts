/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#SMPC-fig1').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'SMPC Historical Perspective' // TITLE
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        xAxis: {
            categories: ["2001 Kingston","2003 Las Vegas","2005 (workshops)","2007 Montreal","2009 Indianapolis","2011 Rochester","2013 Toronto"], // X-AXIS CATEGORIES
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Scheduled Presentations' // Y-AXIS LABEL
            },
            min: 0, max: 300 // Y-AXIS SCALE
        },
        legend: {
            enabled: true
        },
        credits: {
            enabled: false
        },
        tooltip: { enabled: false },
        series: [{
            // First category of Data
            name: 'Posters',
            color: 'red',
            data: [15,24,0,53,63,88,95],
        },{
            // First category of Data
            name: 'Talks',
            color: 'blue',
            data: [65,60,0,75,75,104,187],
        },]
    });
    $('#SMPC-2016-Figure1').css({
        "position": "relative"
    });
});