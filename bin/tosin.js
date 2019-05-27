#!/usr/bin/env node

const { init } = require("../lib/tosin.cjs");

const program = require('commander');

program
  .version('1.0.0')
  .command('init')
  .action(() => {
    init()
      .then(() => process.exit(0))
      .catch(() => process.exit(1))
  })

  program.parse(process.argv);

