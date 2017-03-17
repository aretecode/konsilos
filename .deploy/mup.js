module.exports = {
    servers: {
        one: {
            host: '45.55.153.155',
            username: 'root'
        }
    },

    meteor: {
        name: 'konsilos-web',
        path: '../',
        servers: {
            one: {}
        },
        buildOptions: {
            serverOnly: true,
        },
        env: {
            PORT: 80,
            ROOT_URL: 'https://konsilos.com'
        },
        // Default docker image doesn't suport meteor 1.4+ yet:
        docker: {
            image: 'abernix/meteord:base',
        },
        ssl: {
            autogenerate: {
                email: "lfilho@gmail.com",
                domains: "konsilos.com,www.konsilos.com",
            }
        },
        enableUploadProgressBar: true
    },

    mongo: {
        oplog: true,
        port: 27017,
        servers: {
            one: {},
        },
    },

};
