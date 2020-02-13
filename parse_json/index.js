const fs = require('fs');

const rawData = fs.readFileSync('../r/names.json');

const json = JSON.parse(rawData);

json.forEach((obj) => {
  const stringifiedJson = JSON.stringify(obj.data);
  fs.writeFileSync(`./names/${obj.name}.json`, stringifiedJson);
})