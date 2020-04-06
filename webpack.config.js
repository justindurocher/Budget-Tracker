const WebpackPwaManifest = require("webpack-pwa-manifest");

const path = require('path');

const config = {
    entry : {
        app: "./server.js"
    },
    output : {
        path : __dirname + "public/bundle",
        filename : "bundle.js"
    },
    mode : "development",
    plugins: [new WebpackPwaManifest({
        "name" : "Budget Tracker",
        "short_name" : "Budget App",
        "icons" : [
            {
                "src" : path.resolve(__dirname + "public/icons/school.png"),
                "sizes" : [192,512]
            }
        ],
        "theme_color" : "#ffffff",
        "background_color" : "#ffffff",
        "start_url" : "/",
        "display" : "standalone"
    })]
};

module.exports = config;