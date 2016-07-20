/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#Lorraine-2016-fig6-1').highcharts({
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Point of Subjective Simultaneity' // TITLE
        },
        plotOptions: {
            bar: {
                borderColor: '#000000',
                borderWidth: 1
            }
        },
        yAxis: {
            title: {
                text: 'PSS (ms)' // X-AXIS LABEL
            },

            crosshair: true,
            min: -300, max: 300,
            minorTickInterval: 50,
        },
        xAxis: {
            title: {
                text: 'Visual Condition' // Y-AXIS LABEL
            },
            categories: ["Marimba", "Cello"], // X-AXIS CATEGORIES
            gridLineWidth: 2,
        },
        legend: {
            enabled: true
        },
        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">Visual Condition: {point.key}</span><br>',
            shared: true,
        },
        series: [{
            // First category of Data
            name: 'Matched',
            color: 'white',
            data: [-135,-70],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: Black">{series.name}</span>: <b>{point.y:0f}ms </b>'
            }
        }, {
            name: 'error',
            type: 'errorbar',
            data: [[-170,-100],[-85,-50]], //min t0 max
        }, {
            // Second Category of Data
            name: 'Mismatched',
            color: 'grey',
            data: [-110,60],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:0f}ms </b>'
            }
        }, {
            name: 'error',
            type: 'errorbar',
            data: [[-125,-90],[40,80]], //min t0 max
            // Next category?

        }]
    });
});