const fs = require("fs");

function countContent(dirPath, content) {

    fs.readdir(dirPath, (error, files) => {
        if (error) throw new Error(error);
        for (file of files) {
            let filePath = `${dirPath}/${file}`;

            fs.stat(filePath, (err, stat) => {
                if (error) throw new Error(error);
                if (stat.isFile()) {
                    fs.readFile(filePath, "utf-8", (err, data) => {

                    });
                }
            });
        }
    });
}

countContent(`./bacon-ipsum`)