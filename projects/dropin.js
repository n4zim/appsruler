const Project = require('../core/project');
const Command = require('../core/command');

// ----------------------------------------

const project = new Project("DROP'in");

// ----------

const restart = new Command('upgrade [image]', 'Upgrade the Docker image inside containers');

restart.setAction(() => {
    console.log('Upgrade !');
});

project.addCommand(restart);

// ----------------------------------------

module.exports = project;
