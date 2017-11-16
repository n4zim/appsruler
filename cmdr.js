#!/usr/bin/env node
'use strict';

const program = require('commander'),
    chalk = require("chalk"),
    pkg = require('./package.json'),
    path = require("path");

program.version('0.1.0');

program.on('-h, --help', function(){
    console.log('HELP !');
});


require("fs").readdirSync(path.join(__dirname, "projects")).forEach(file => {
    const project = require("./projects/" + file);
    program.command(file.slice(0, -3) + ' [command]', 'Run a command for the project ' + project.name)
        .option('-a, --app [name]', 'application to use (default: local)', /^(local|begonia|production)$/i, 'local')
        .action(() => console.log('Test'));
});

program.parse(process.argv);

/*program.version(pkg.version).usage('<project> <command> [options]');

PROJECTS.forEach(project => {
    program
        .command(project.command + ' [command]', 'Run a command for the project ' + project.name)
        .option('-a, --app [name]', 'application to use (default: local)', /^(local|begonia|production)$/i, 'local')
        .action(project.action)
    ;
});

if(process.argv.length === 2) {
    console.log('RUN THE UI WITH PROJECT LIST');
    //program.help();
} else if(process.argv.length === 3) {
    console.log('RUN THE UI WITH COMMAND LIST');
} else {
    program.parse(process.argv);
}
*/