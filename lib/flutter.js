#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const directory = require("./flutterdirectory");
const input = require("./input");
const fs = require("fs");
const touch = require("touch");
var emoji = require("node-emoji");

// const Spinner = CLI.Spinner;

clear();

console.log(
    chalk.cyanBright.bold(
        figlet.textSync("Bfast  UI", {
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: false,
        })
    )
);

if (!directory.checkifmodulesdirectoryexists()) {
    directory.createmodulesdirectory();
}

const run = async() => {
    const modulefolders = [
        "components",
        "guards",
        "models",
        "pages",
        "services",
        "specs",
        "styles",
    ];
    const modulefile = ".module.ts";
    const newpath = "./lib/modules/";
    const credentials = await input.askforinput();

    const modulepath = newpath.concat(credentials.modulename);
    fs.mkdirSync(modulepath, {
        recursive: true,
    });

    modulefolders.forEach((folder) => {
        const submodulefolders = modulepath.concat("/", folder);
        fs.mkdirSync(submodulefolders, {
            recursive: true,
        });
    });

    const filepath = modulepath.concat(
        "/",
        credentials.modulename,
        ".module.dart"
    );
    touch(filepath);

    console.log(
        chalk.greenBright(
            "Successfully created folders and files for this module",
            emoji.get("sunglasses")
        )
    );
    console.log(
        chalk.greenBright(
            "speed is of the essence",
            emoji.get("smiley"),
            emoji.get("rocket")
        )
    );

    // const status = new Spinner(' Creating the necessary modules and files, please wait...');
    // status.start();
    // status.stop();
};

run();

// const filelist = _.without(fs.readdirSync('.'), '.git', '.gitignore');

// if (filelist.length) {
//     console.log('file already exists')
// } else {
//     touch('.gitignore');
// }