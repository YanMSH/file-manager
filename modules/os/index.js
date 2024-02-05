import os from 'node:os';
import { findFlagCommand } from '../utils';

const OS_COMMANDS = [
    {
        command: 'eol',
        func: () => os.EOL
    },
    {
        command: 'cpus',
        func: () => os.cpus().length
    },
    {
        command: 'homedir',
        func: () => os.homedir()
    },
    {
        command: 'username',
        func: () => os.userInfo().username
    },
    {
        command: 'architecture',
        func: () => process.arch
    }
];

const osModule = (arg) => {
    const command = findFlagCommand(arg);

    if (command) {
        process.stdout.write(`${command.func()} \n`)
    } else {
        process.stdout.write(`Option ${arg} does not exist \n`)
    }

};

export { osModule };
