var path = require("path");


var rootPath = path.normalize(__dirname + "/../../")
module.exports = {
    development: {
        rootPath: rootPath,
        db: "mongodb://localhost/multivision",
        port: 3030
    },
    production: {
        rootPath: rootPath,
        db: "mongodb://jawad:jawadmultivision@ds053788.mongolab.com:53788/multivision",
        port: process.env.PORT || 80
    }
}