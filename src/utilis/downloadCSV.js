// src/downloadCSV.js
const downloadCSV = (data, filename = 'data.csv') => {
    const csvRows = [];

    // Get the headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    // Loop over the rows
    for (const row of data) {
        const values = headers.map((header) => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    }

    // Create a blob and URL for the CSV file
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    // Create a link element to trigger the download
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export default downloadCSV;
