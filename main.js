var data = [
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['-26.2', '-16.1', '-8.6', '-3.2', '0', '1.2', '1', '-1.1'],
    ['0', '0', '0', '0', '0', '0', '0', '0']
];

var container = document.getElementById('example');

var rowHeadersOctaves = ["Input", "", "Result"]
var colHeadersOctaves = ["63", "125", "250", "500", "1000", "2000", "4000", "8000"]

var hot = new Handsontable(container, {
    data: data,
    rowHeaders: rowHeadersOctaves,
    colHeaders: colHeadersOctaves,
    columnSummary: [
        {
            destinationRow: 0,
            destinationColumn: 0,
            reversedRowCoords: true,
            type: 'sum',
            forceNumeric: true
        },
        {
            destinationRow: 0,
            destinationColumn: 1,
            reversedRowCoords: true,
            type: 'sum',
            forceNumeric: true
        },
        {
            destinationRow: 0,
            destinationColumn: 2,
            reversedRowCoords: true,
            type: 'sum',
            forceNumeric: true
        },
        {
            destinationRow: 0,
            destinationColumn: 3,
            reversedRowCoords: true,
            type: 'sum',
            forceNumeric: true
        },
        {
            destinationRow: 0,
            destinationColumn: 4,
            reversedRowCoords: true,
            type: 'sum',
            forceNumeric: true
        },
        {
            destinationRow: 0,
            destinationColumn: 5,
            reversedRowCoords: true,
            type: 'sum',
            forceNumeric: true
        },
        {
            destinationRow: 0,
            destinationColumn: 6,
            reversedRowCoords: true,
            type: 'sum',
            forceNumeric: true
        },
        {
            destinationRow: 0,
            destinationColumn: 7,
            reversedRowCoords: true,
            type: 'sum',
            forceNumeric: true
        }
    ],
    licenseKey: 'non-commercial-and-evaluation'
});