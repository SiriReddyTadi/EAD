const fs = require('fs');
fs.writeFileSync('data.txt', 'Name: Siri\n RollNo: 091\n Branch: IT\n');
console.log("File Created and Data Written");

const data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

fs.appendFile('data.txt', 'College: CBIT\n', (err) => {
    if (err) throw err;
    console.log("Data Appended Successfully!");

    const data = fs.readFileSync('data.txt', 'utf-8');
    console.log(data);
})