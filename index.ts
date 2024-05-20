#!/usr/bin/env node

// import fs from "fs";
// import path from "path";
import yargs from "yargs/yargs";

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

const argv = yargs(process.argv.slice(2))
    .options({
        a: { type: "boolean", default: false },
        b: { type: "string", demandOption: true },
        c: { type: "number", alias: "chill" },
        d: { type: "array" },
        e: { type: "count" },
        f: { choices: ["1", "2", "3"] },
    })
    .parse();

console.log(argv);
