#!/usr/bin/env node

import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

type setupServiceSchemaHandlerArgs = {
  path: string;
};

function setupServiceSchemaHandler(args: setupServiceSchemaHandlerArgs) {
  console.log(`Setup Service Schema...\nEnsuring ${args.path} exists.`);

  fs.ensureDirSync(args.path);

  console.log(`Installing service schema to ${args.path}`);

  const sourcePath = path.join(__dirname, 'data/test.json');
  const destinationPath = path.join(process.cwd(), `${args.path}/test.json`);

  fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
      console.error('Error copying file:', err);
    } else {
      console.log('File copied successfully to', destinationPath);
    }
  });
}

function testHandler() {
  console.log('Test handler');
}

console.log(`
Welcome to ${chalk.cyan('ATC')}.......

       __|__
--o--o--(_)--o--o--

${chalk.greenBright('***Engines engaged***')}
------------------------------------
`);

// Configure yargs for CLI app
yargs(hideBin(process.argv))
  .command(
    'echo',
    'basically my test function',
    {
      e: {
        alias: 'echo',
        type: 'string',
        demandOption: false,
      },
    },
    testHandler,
  )
  .command(
    'setup-schema', // Command name
    'Fetch and install the default ATC service schema', // Command description
    {
      path: {
        alias: 'p',
        type: 'string',
        default: 'atc/infra',
      },
    },
    setupServiceSchemaHandler,
  )
  .demandCommand(1, 'You need at least one command to run this tool')
  .help().argv; // Return the argv object so this doesn't get optimized away.
