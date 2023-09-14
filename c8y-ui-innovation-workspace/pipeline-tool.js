const { Command } = require('commander');
const axios = require('axios');
const fs = require("fs");
const _ = require("lodash");
const { execSync } = require("child_process");

const jsonPath = './api-definition/c8y-oas.json';
const originalJson = require(jsonPath);

const program = new Command();

program
  .name('pipeline tools')
  .description('CLI to process and build open api library')
  .version('0.0.1');

program.command('build-api')
  .description('Downloads fresh version of API, and builds library based on it.')
  .argument('[string]', 'URL for open-api json.', 'https://cumulocity.com/api/core/10.18.0/dist/c8y-oas.json')
  .option('-f, --force', 'Build api without comparing json definitions.')
  .action(buildAction);

program.parse();


async function buildAction(url, options) {
  try {
    // Download JSON from the URL
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`Failed to download JSON. Status code: ${response.status}`);
    }

    const jsonData = response.data;
    jsonPostProcessing(jsonData)

    const isSame = _.isEqual(jsonData, originalJson)
    if (isSame && !options.force) {
      console.log('there are no changes in json definition. Exiting...')
      return;
    }
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));

    execSync('npx rimraf projects/ngx-c8y-openapi-library/src/api', {stdio: 'inherit'});
    execSync(`npx ng-openapi-gen --input ${jsonPath} --output ./projects/ngx-c8y-openapi-library/src/api`, {stdio: 'inherit'});
    execSync('npx ng build');




  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

function jsonPostProcessing(definition) {
  // Replace dots inside tags section.
  definition.tags = definition.tags.map( tag => {
    tag.name = tag.name.replace(/\./g, "")
    return tag
  })
  // For every endpoint definition we must alter tag names to match tags definitions.
  deepIterateObject(definition.paths, alterTags)
}

function alterTags(obj, key, value) {
  if (key === 'tags') {
    obj[key] = value.map(tag => tag.replace(/\./g, ""))
    // console.log(`Key: ${key}, Value: ${value}`);
  }
}

function deepIterateObject(obj, callback) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Call the callback function with the current key and value
      callback(obj, key, value);

      // If the value is an object, recursively call the function
      if (typeof value === 'object' && value !== null) {
        deepIterateObject(value, callback);
      }
    }
  }
}
