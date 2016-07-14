/**
 * Created by kyle on 2016-07-14.
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
                stacking: 'norma,l'
            }
        },
        xAxis: {
            categories: ["2001 Kingston","2003 Las Vegas","2005 (workshops)","2007 Montreal","2011 Indiana","2013 Toronto"], // X-AXIS CATEGORIES
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
            data: [15,24,0,53,77,94],
        },{
            // First category of Data
            name: 'Talks',
            color: 'blue',
            data: [64,60,0,75,108,199],
        },]
    });
    $('#SMPC-2016-Figure1').css({
        "position": "relative"
    });
});