var data = [
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0']
];

var container = document.getElementById('example');

var colHeadersOctaves = ["63", "125", "250", "500", "1000", "2000", "4000", "8000"]

var hot = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: colHeadersOctaves,
    licenseKey: 'non-commercial-and-evaluation'
});