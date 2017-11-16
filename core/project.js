
class Project {

    constructor(name) {
        this.name = name;
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

}

module.exports = Project;
