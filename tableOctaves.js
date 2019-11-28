// initialise array (3x8)

function Create2DArray(rows,columns) {
    var x = new Array(rows);
    for (var i = 0; i < rows; i++) {
        x[i] = new Array(columns);
    }
    return x;
 }

var data = Create2DArray(3, 8);

// set second row to "10"

var freqBands = [63, 125, 250, 500, 1000, 2000, 4000, 8000]

function RAf(f) {
    var RAf = new Array(6);
    RAf[0] = ((Math.pow(12194, 2)) * (Math.pow(f, 4)))
    RAf[1] = ((Math.pow(f, 2)) + (Math.pow(20.6, 2)));
    RAf[2] = ((Math.pow(f, 2)) + (Math.pow(107.7, 2)));
    RAf[3] = ((Math.pow(f, 2)) + (Math.pow(737.9, 2)));
    RAf[4] = ((Math.pow(f, 2)) + (Math.pow(12194, 2)));
    RAf = RAf[0] / (RAf[1] * Math.sqrt(RAf[2] * RAf[3] * RAf[4]));    
    return RAf;
}

function Af(freq) {
    var Af = (20 * Math.log10(RAf(freq))) - (20 * Math.log10(RAf(1000)));
    return Af;
}

var dataElementLength = data[1].length
for (var i = 0; i < dataElementLength; i++) {
    data[1][i] = Af(freqBands[i]).toFixed(1);
}

// instantiate table

var container = document.getElementById('tableOctaves');

var rowHeaders = ["Input", "", "Result"];
var colHeaders = freqBands;
var columnSummary = new Array (freqBands.length);
var columnSummaryLength = freqBands.length
for (var i = 0; i < columnSummaryLength; i++) {
    columnSummary[i] = {
        destinationRow: 0,
        destinationColumn: i,
        reversedRowCoords: true,
        type: 'sum',
        forceNumeric: true
    };
}

var hot = new Handsontable(container, {
    data: data,
    rowHeaders: rowHeaders,
    colHeaders: colHeaders,
    columnSummary: columnSummary,
    licenseKey: 'non-commercial-and-evaluation'
});