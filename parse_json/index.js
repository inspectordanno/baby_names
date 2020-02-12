const fs = require('fs');

const rawData = fs.readFileSync('../r/babynames.json');

const json = JSON.parse(rawData);

json.forEach((obj) => {
  const stringifiedJson = JSON.stringify(obj.data);
  fs.writeFileSync(`./${obj.sex}/${obj.name}.json`, stringifiedJson);
})