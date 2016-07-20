/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#Moving-Improves-Performance').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Moving Improves Performance'
    },
    xAxis: {
        categories: ['Early', 'On-Time', 'Late']
    },
    yAxis: {
        title: {
            text: 'Proportion of correct responses (%)'
        }
    },
    series: [{
        name: 'Movement',
        color: 'blue',
        data: [56, 79, 76]
    }, {
        name: 'Movement error',
        type: 'errorbar',
        data: [[51,63],[76,82],[70,81]]
    }, {
        name: 'No-Movement',
        color: 'red',
        data: [53,75,42]
    }, {
        name: 'No-Movement error',
        type: 'errorbar',
        data: [[49,60],[71,79],[36,50]]

    }]
});
});