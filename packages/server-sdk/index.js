let grpc = require('grpc');
let sdk = require('./src/sdk.js')

if (require.main === module) {
    let s = new sdk.Server();
    s.dial('127.0.0.1:8080')
    s.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    s.start();

    let shutdown = () => {
        console.log('terminating')
        s.tryShutdown(() => {})
        console.log('terminated')
    }
    process.on('SIGINT',  shutdown);
    process.on('SIGTERM', shutdown);
}

