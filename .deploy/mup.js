module.exports = {
    servers: {
        one: {
            host: '45.55.153.155',
            username: 'root'
        }
    },

    meteor: {
        name: 'konsilos-web-production',
        path: '../',
        servers: {
            one: {}
        },
        buildOptions: {
            serverOnly: true,
        },
        env: {
            ROOT: 'https://konsilos.com',
            MONGO_URL: 'mongodb://localhost/meteor'
        },
        // Default docker image doesn't suport meteor 1.4+ yet:
        dockerImage: 'abernix/meteord:base',
        ssl: {
            port: 443,
            crt: './fullchain.pem',
            key: './privkey.pem'
        }
    },

    mongo: {
        oplog: true,
        port: 27017,
        servers: {
            one: {},
        },
    },

};
