import fs from 'node:fs';
import os from "os";
import path from "path";
import { findCommand } from '../utils';

const isPathHome = (path) => {
    return path === os.homedir();
}

const FS_COMMANDS = [
    {
        command: 'up',
        argsCount: 0,
        func: (currentPath) => path.resolve(currentPath, '..')
    },
    {
        command: 'cd',
        argsCount: 1,
        func: (currentPath, newPath) => {
            try {
                path.resolve(currentPath, newPath);
            } catch {
                process.stdout.write('Cannot go there')
            }
        }
    },
    {
        command: 'cat',
        argsCount: 1,
        func: (path) => fs.EOL
    },
    {
        command: 'add',
        argsCount: 1,
        func: () => fs.cpus().length
    },
    {
        command: 'rn',
        argsCount: 2,
        func: () => fs.homedir()
    },
    {
        command: 'cp',
        argsCount: 2,
        func: () => fs.homedir()
    },
    {
        command: 'mv',
        argsCount: 2,
        func: () => fs.userInfo().username
    },
    {
        command: 'rm',
        argsCount: 1,
        func: () => process.arch
    }
];

const fsModule = (arg) => {
    const command = findCommand(arg);

    if (command) {
        process.stdout.write(`${command.func()} \n`)
    } else {
        process.stdout.write(`Option ${arg} does not exist \n`)
    }

};

export { fsModule };