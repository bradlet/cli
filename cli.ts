#!/usr/bin/env node

// import fs from "fs";
// import path from "path";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

console.log("Hello npx test!");

// const sourcePath = path.join(__dirname, "data/test.json");
// const destinationPath = path.join(process.cwd(), "test.json");

// fs.copyFile(sourcePath, destinationPath, (err) => {
//     if (err) {
//         console.error("Error copying file:", err);
//     } else {
//         console.log("File copied successfully to", destinationPath);
//     }
// });

function getServiceSchemaHandler() {
    console.log("Test handler");
}

// Configure yargs
const argv = yargs(hideBin(process.argv))
  .command(
    'get-service-schema', // Command name
    'Fetch the service schema', // Command description
    () => {}, // Builder function (no options for now)
    getServiceSchemaHandler // Handler function
  )
  .demandCommand(1, 'You need at least one command to run this tool')
  .help()
  .parse()

console.log(argv);
