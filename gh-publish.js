const ghPages = require("gh-pages"),
    fs = require("fs-extra");

const copyStatic = fs.copy("./static/", "./dist/static/"),
    copyCname = fs.copy("./CNAME", "./dist/CNAME");
Promise.all([copyStatic, copyCname])
    .then(() => {
        ghPages.publish("dist", error => {
            error && console.error(error);
        });
    })
    .catch(error => console.error(error));