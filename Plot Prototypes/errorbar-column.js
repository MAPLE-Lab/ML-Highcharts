/**
 * Created by kyle on 2016-07-20.
 */
$('#QJEP-2016-fig5-1').highcharts({
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
            text: 'Amplitude envelope at training - test' // X-AXIS LABEL
        },
        categories: ["Perc","Flat"], // X-AXIS CATEGORIES
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
        name: 'to Percussion',
        color: 'grey',
        data: [{y: 1.55, color: 'white'},0.9],
    }, {
        name: 'Data error',
        type: 'errorbar',
        data: [[1.3, 1.7], [0.7, 1.2]], //min t0 max
        // Next category?
    }, {
        // First category of Data
        name: 'to Flat',
        color: 'grey',
        data: [{y: 1.55, color: 'white'},0.9],
    }, {
        name: 'Data error',
        type: 'errorbar',
        data: [[1.3, 1.7], [0.7, 1.2]], //min t0 max

    }]
});