const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const xml2js = require('xml2js');
const yaml = require('js-yaml');


const csvData = parse(fs.readFileSync('data.csv', 'utf-8'), { columns: true });


const xmlData = [];
const xmlParser = new xml2js.Parser();
const xmlFileContent = fs.readFileSync('data.xml', 'utf-8');
xmlParser.parseString(xmlFileContent, (err, result) => {
    result.people.person.forEach(person => {
        xmlData.push({
            name: person.name[0],
            age: parseInt(person.age[0]),
            country: person.country[0]
        });
    });
});


const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));


const yamlData = yaml.load(fs.readFileSync('data.yaml', 'utf-8'));


console.log("CSV Data:", csvData);
console.log("XML Data:", xmlData);
console.log("JSON Data:", jsonData);
console.log("YAML Data:", yamlData);
