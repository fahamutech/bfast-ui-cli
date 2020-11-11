const fs = require("fs");

const newpath = "./lib/modules";
const apppath = "./lib";
let dir = false;

module.exports = {
    checkifmodulesdirectoryexists: () => {
        fs.readdirSync(apppath).filter((module) => {
            if (module === "index.js") {
                dir = true;
            }
        });
        return dir;
    },
    createmodulesdirectory: () => {
        fs.mkdirSync(newpath, {
            recursive: true,
        });
    },
};