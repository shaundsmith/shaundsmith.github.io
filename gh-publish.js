const ghPages = require("gh-pages"),
    fs = require("fs-extra");

const copyStatic = fs.copy("./static/", "./build/static/"),
    copyCname = fs.copy("./CNAME", "./build/CNAME");
Promise.all([copyStatic, copyCname])
    .then(() => {
        ghPages.publish("build", error => {
            error && console.error(error);
        });
    })
    .catch(error => console.error(error));