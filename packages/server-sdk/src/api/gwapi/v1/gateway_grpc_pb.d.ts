// package: libra.gwapi.v1
// file: gwapi/v1/gateway.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as gwapi_v1_gateway_pb from "../../gwapi/v1/gateway_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IGatewayService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    push: IGatewayService_IPush;
    subscribe: IGatewayService_ISubscribe;
}

interface IGatewayService_IPush extends grpc.MethodDefinition<gwapi_v1_gateway_pb.PushRequest, gwapi_v1_gateway_pb.PushResponse> {
    path: string; // "/libra.gwapi.v1.Gateway/Push"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gwapi_v1_gateway_pb.PushRequest>;
    requestDeserialize: grpc.deserialize<gwapi_v1_gateway_pb.PushRequest>;
    responseSerialize: grpc.serialize<gwapi_v1_gateway_pb.PushResponse>;
    responseDeserialize: grpc.deserialize<gwapi_v1_gateway_pb.PushResponse>;
}
interface IGatewayService_ISubscribe extends grpc.MethodDefinition<gwapi_v1_gateway_pb.SubscribeRequest, gwapi_v1_gateway_pb.SubscribeResponse> {
    path: string; // "/libra.gwapi.v1.Gateway/Subscribe"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<gwapi_v1_gateway_pb.SubscribeRequest>;
    requestDeserialize: grpc.deserialize<gwapi_v1_gateway_pb.SubscribeRequest>;
    responseSerialize: grpc.serialize<gwapi_v1_gateway_pb.SubscribeResponse>;
    responseDeserialize: grpc.deserialize<gwapi_v1_gateway_pb.SubscribeResponse>;
}

export const GatewayService: IGatewayService;

export interface IGatewayServer {
    push: grpc.handleUnaryCall<gwapi_v1_gateway_pb.PushRequest, gwapi_v1_gateway_pb.PushResponse>;
    subscribe: grpc.handleUnaryCall<gwapi_v1_gateway_pb.SubscribeRequest, gwapi_v1_gateway_pb.SubscribeResponse>;
}

export interface IGatewayClient {
    push(request: gwapi_v1_gateway_pb.PushRequest, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.PushResponse) => void): grpc.ClientUnaryCall;
    push(request: gwapi_v1_gateway_pb.PushRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.PushResponse) => void): grpc.ClientUnaryCall;
    push(request: gwapi_v1_gateway_pb.PushRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.PushResponse) => void): grpc.ClientUnaryCall;
    subscribe(request: gwapi_v1_gateway_pb.SubscribeRequest, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.SubscribeResponse) => void): grpc.ClientUnaryCall;
    subscribe(request: gwapi_v1_gateway_pb.SubscribeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.SubscribeResponse) => void): grpc.ClientUnaryCall;
    subscribe(request: gwapi_v1_gateway_pb.SubscribeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.SubscribeResponse) => void): grpc.ClientUnaryCall;
}

export class GatewayClient extends grpc.Client implements IGatewayClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public push(request: gwapi_v1_gateway_pb.PushRequest, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public push(request: gwapi_v1_gateway_pb.PushRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public push(request: gwapi_v1_gateway_pb.PushRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public subscribe(request: gwapi_v1_gateway_pb.SubscribeRequest, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.SubscribeResponse) => void): grpc.ClientUnaryCall;
    public subscribe(request: gwapi_v1_gateway_pb.SubscribeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.SubscribeResponse) => void): grpc.ClientUnaryCall;
    public subscribe(request: gwapi_v1_gateway_pb.SubscribeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gwapi_v1_gateway_pb.SubscribeResponse) => void): grpc.ClientUnaryCall;
}
