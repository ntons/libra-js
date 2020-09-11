import * as grpc from 'grpc';

import { HealthService, HealthCheckRequest, HealthCheckResponse } from 'grpc-ts-health-check';
import { Endpoint } from './api/sdk/v1/config_pb';

class API {
}

class MVC {
}

class Interceptor {
}

class Health {
    check(call: grpc.ServerUnaryCall<HealthCheckRequest>,
        callback: grpc.sendUnaryData<HealthCheckResponse>) {
        let resp = new HealthCheckResponse();
        resp.setStatus(HealthCheckResponse.ServingStatus.SERVING);
        callback(null, resp);
    }
}

export class Server {
    private server: grpc.Server = new grpc.Server();
    private health: Health = new Health();
    constructor() {
        this.server.addService(HealthService, this.health);
    }

    start() {
        this.server.start();
    }
    tryShutdown(callback) {
        this.server.tryShutdown(callback);
    }
}
