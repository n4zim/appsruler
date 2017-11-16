
class Command {

    constructor(command, description) {
        this.command = command;
        this.description = description;
    }

    setAction(action) {
        this.action = action;
    }

}

module.exports = Command;
