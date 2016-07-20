/**
 * MAPLE Lab Graphs
 * Highcharts.js
 *
 * created by Kyle Gauder
 */
$(document).ready(function () {
    $('#Moving-Increases-Confidence').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: 'Moving Increases Confidence'
        },
        xAxis: {
            categories: ['Early', 'On-Time', 'Late']
        },
        yAxis: {
            title: {
                text: 'Mean Confidence Rating (1-5)'
            },
            min: 3, max: 5
        },
        series: [{
            name: 'Movement',
            color: 'blue',
            data: [4.3, 4.1, 4.2],
        }, {
            name: 'Movement error',
            type: 'errorbar',
            data: [[4.2, 4.4], [3.8, 4.3], [4.0, 4.4]]
        }, {
            name: 'No-Movement',
            color: 'red',
            data: [3.8, 3.8, 3.9],
        }, {
            name: 'No-Movement error',
            type: 'errorbar',
            data: [[3.7, 4.1], [3.7, 4.1], [3.8, 4.1]]

        }]
    });
});