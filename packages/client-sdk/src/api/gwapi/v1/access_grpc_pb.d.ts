// package: libra.gwapi.v1
// file: gwapi/v1/access.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as gwapi_v1_access_pb from "../../gwapi/v1/access_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IAccessService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signIn: IAccessService_ISignIn;
}

interface IAccessService_ISignIn extends grpc.MethodDefinition<gwapi_v1_access_pb.SignInRequest, google_protobuf_any_pb.Any> {
    path: string; // "/libra.gwapi.v1.Access/SignIn"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<gwapi_v1_access_pb.SignInRequest>;
    requestDeserialize: grpc.deserialize<gwapi_v1_access_pb.SignInRequest>;
    responseSerialize: grpc.serialize<google_protobuf_any_pb.Any>;
    responseDeserialize: grpc.deserialize<google_protobuf_any_pb.Any>;
}

export const AccessService: IAccessService;

export interface IAccessServer {
    signIn: grpc.handleServerStreamingCall<gwapi_v1_access_pb.SignInRequest, google_protobuf_any_pb.Any>;
}

export interface IAccessClient {
    signIn(request: gwapi_v1_access_pb.SignInRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<google_protobuf_any_pb.Any>;
    signIn(request: gwapi_v1_access_pb.SignInRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<google_protobuf_any_pb.Any>;
}

export class AccessClient extends grpc.Client implements IAccessClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public signIn(request: gwapi_v1_access_pb.SignInRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<google_protobuf_any_pb.Any>;
    public signIn(request: gwapi_v1_access_pb.SignInRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<google_protobuf_any_pb.Any>;
}
