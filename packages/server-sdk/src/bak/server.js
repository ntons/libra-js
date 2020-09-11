let grpc = require('grpc');
let health = require('grpc-health-check');
let ptv1 = require('../api/ptapi/v1/account_pb.js')
let ptv1_grpc = require('../api/ptapi/v1/account_grpc_pb.js')
let gwv1 = require('../api/gwapi/v1/access_pb.js')
let gwv1_grpc = require('../api/gwapi/v1/access_grpc_pb.js')

let _get = require('lodash.get');
let _forEach = require('lodash.forEach');

class API {
    constructor(endpoint) {
        this.ptv1 = new ptv1_grpc.AccountClient(
            endpoint, grpc.credentials.createInsecure());
        this.gwv1 = new gwv1_grpc.AccessClient(
            endpoint, grpc.credentials.createInsecure());
    }
}

class MVC {
    constructor(api) {
        this.api = api;
        this.loadedModels = {};
    }

    getModel(id) {
    }

    loadModel(id) {
    }

    commit() {
        _forEach(this.loadedModels, (id, model) => {
        })
    }
}

class Interceptor {
    constructor(api, service, impl) {
        for (let method in service) {
            let defination = service[method];
            if (defination.requestStream || defination.responseStream) {
                throw new Error('only support unary method');
            }
            Interceptor.prototype[method] = (call, callback) => {
                call.api = api;
                call.mvc = new MVC(api);
                call.ctx = {
                    appId:  call.metadata.get("x-libra-app-id"),
                    userId: call.metadata.get("x-libra-user-id"),
                    roleId: call.metadata.get("x-libra-role-id"),
                }
                impl[method](context, call, (err, response) => {
                    call.mvc.commit();
                    callback(err, response);
                })
            }
        }
    }
}

class Health {
    constructor() {
        this.statusMap = {};
    }

    setStatus(service, status) {
        this.statusMap[service] = status
    }

    check(call, callback) {
        let resp = new health.messages.HealthCheckResponse();
        resp.setStatus(_get(
            this.statusMap,
            call.request.getService(),
            proto.grpc.health.v1.HealthCheckResponse.ServingStatus.SERVING));
        callback(null, resp);
    }
}

exports.Server = class Server {
    constructor() {
        this.server = new grpc.Server();
        this.health = new Health()
        this.server.addService(health.service, this.health);
    }

    // endpoint: address:port
    dial(endpoint) {
        this.ptv1 = new ptv1_grpc.AccountClient(
            endpoint, grpc.credentials.createInsecure());
        this.gwv1 = new gwv1_grpc.AccessClient(
            endpoint, grpc.credentials.createInsecure());
    }

    // endpoint: address:port
    bind(endpoint, creds) {
        this.server.bind(endpoint, creds);
    }

    start() {
        this.server.start();
    }

    tryShutdown(callback) {
        this.server.tryShutdown(callback);
    }
}
