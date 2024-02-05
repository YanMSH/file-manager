const isFlag = (command) => {
    return command.slice(0, 1) === '--'
}

const unFlag = (flag) => {
    return flag.slice(2);
}

const findFlagCommand = (arg, commandsArr) => {
    if (isFlag(arg)) {
        return commandsArr.find(cmd => cmd.command.toLowerCase() === unFlag(arg).toLowerCase());
    }

    return null;
};

const findFsCommand = (args, commandsArr) => {
    const cmdString = args[0];
    const command = commandsArr.find(cmd => cmd.command.toLowerCase() === cmdString.toLowerCase());

    if (command && args.length - 1 === command.argsCount) {
        return command;
    }

    return null;
}

export { findFlagCommand }