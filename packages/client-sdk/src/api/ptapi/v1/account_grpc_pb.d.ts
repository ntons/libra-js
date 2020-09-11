// package: libra.ptapi.v1
// file: ptapi/v1/account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ptapi_v1_account_pb from "../../ptapi/v1/account_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IAccountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAccountService_ILogin;
    listRoles: IAccountService_IListRoles;
    createRole: IAccountService_ICreateRole;
    signIn: IAccountService_ISignIn;
    setUserMetadata: IAccountService_ISetUserMetadata;
    setRoleMetadata: IAccountService_ISetRoleMetadata;
}

interface IAccountService_ILogin extends grpc.MethodDefinition<ptapi_v1_account_pb.LoginRequest, ptapi_v1_account_pb.LoginResponse> {
    path: string; // "/libra.ptapi.v1.Account/Login"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ptapi_v1_account_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<ptapi_v1_account_pb.LoginRequest>;
    responseSerialize: grpc.serialize<ptapi_v1_account_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<ptapi_v1_account_pb.LoginResponse>;
}
interface IAccountService_IListRoles extends grpc.MethodDefinition<ptapi_v1_account_pb.ListRolesRequest, ptapi_v1_account_pb.ListRolesResponse> {
    path: string; // "/libra.ptapi.v1.Account/ListRoles"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ptapi_v1_account_pb.ListRolesRequest>;
    requestDeserialize: grpc.deserialize<ptapi_v1_account_pb.ListRolesRequest>;
    responseSerialize: grpc.serialize<ptapi_v1_account_pb.ListRolesResponse>;
    responseDeserialize: grpc.deserialize<ptapi_v1_account_pb.ListRolesResponse>;
}
interface IAccountService_ICreateRole extends grpc.MethodDefinition<ptapi_v1_account_pb.CreateRoleRequest, ptapi_v1_account_pb.CreateRoleResponse> {
    path: string; // "/libra.ptapi.v1.Account/CreateRole"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ptapi_v1_account_pb.CreateRoleRequest>;
    requestDeserialize: grpc.deserialize<ptapi_v1_account_pb.CreateRoleRequest>;
    responseSerialize: grpc.serialize<ptapi_v1_account_pb.CreateRoleResponse>;
    responseDeserialize: grpc.deserialize<ptapi_v1_account_pb.CreateRoleResponse>;
}
interface IAccountService_ISignIn extends grpc.MethodDefinition<ptapi_v1_account_pb.SignInRequest, ptapi_v1_account_pb.SignInResponse> {
    path: string; // "/libra.ptapi.v1.Account/SignIn"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ptapi_v1_account_pb.SignInRequest>;
    requestDeserialize: grpc.deserialize<ptapi_v1_account_pb.SignInRequest>;
    responseSerialize: grpc.serialize<ptapi_v1_account_pb.SignInResponse>;
    responseDeserialize: grpc.deserialize<ptapi_v1_account_pb.SignInResponse>;
}
interface IAccountService_ISetUserMetadata extends grpc.MethodDefinition<ptapi_v1_account_pb.SetUserMetadataRequest, ptapi_v1_account_pb.SetUserMetadataResponse> {
    path: string; // "/libra.ptapi.v1.Account/SetUserMetadata"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ptapi_v1_account_pb.SetUserMetadataRequest>;
    requestDeserialize: grpc.deserialize<ptapi_v1_account_pb.SetUserMetadataRequest>;
    responseSerialize: grpc.serialize<ptapi_v1_account_pb.SetUserMetadataResponse>;
    responseDeserialize: grpc.deserialize<ptapi_v1_account_pb.SetUserMetadataResponse>;
}
interface IAccountService_ISetRoleMetadata extends grpc.MethodDefinition<ptapi_v1_account_pb.SetRoleMetadataRequest, ptapi_v1_account_pb.SetRoleMetadataResponse> {
    path: string; // "/libra.ptapi.v1.Account/SetRoleMetadata"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ptapi_v1_account_pb.SetRoleMetadataRequest>;
    requestDeserialize: grpc.deserialize<ptapi_v1_account_pb.SetRoleMetadataRequest>;
    responseSerialize: grpc.serialize<ptapi_v1_account_pb.SetRoleMetadataResponse>;
    responseDeserialize: grpc.deserialize<ptapi_v1_account_pb.SetRoleMetadataResponse>;
}

export const AccountService: IAccountService;

export interface IAccountServer {
    login: grpc.handleUnaryCall<ptapi_v1_account_pb.LoginRequest, ptapi_v1_account_pb.LoginResponse>;
    listRoles: grpc.handleUnaryCall<ptapi_v1_account_pb.ListRolesRequest, ptapi_v1_account_pb.ListRolesResponse>;
    createRole: grpc.handleUnaryCall<ptapi_v1_account_pb.CreateRoleRequest, ptapi_v1_account_pb.CreateRoleResponse>;
    signIn: grpc.handleUnaryCall<ptapi_v1_account_pb.SignInRequest, ptapi_v1_account_pb.SignInResponse>;
    setUserMetadata: grpc.handleUnaryCall<ptapi_v1_account_pb.SetUserMetadataRequest, ptapi_v1_account_pb.SetUserMetadataResponse>;
    setRoleMetadata: grpc.handleUnaryCall<ptapi_v1_account_pb.SetRoleMetadataRequest, ptapi_v1_account_pb.SetRoleMetadataResponse>;
}

export interface IAccountClient {
    login(request: ptapi_v1_account_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: ptapi_v1_account_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: ptapi_v1_account_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    listRoles(request: ptapi_v1_account_pb.ListRolesRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    listRoles(request: ptapi_v1_account_pb.ListRolesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    listRoles(request: ptapi_v1_account_pb.ListRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    createRole(request: ptapi_v1_account_pb.CreateRoleRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.CreateRoleResponse) => void): grpc.ClientUnaryCall;
    createRole(request: ptapi_v1_account_pb.CreateRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.CreateRoleResponse) => void): grpc.ClientUnaryCall;
    createRole(request: ptapi_v1_account_pb.CreateRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.CreateRoleResponse) => void): grpc.ClientUnaryCall;
    signIn(request: ptapi_v1_account_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    signIn(request: ptapi_v1_account_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    signIn(request: ptapi_v1_account_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    setUserMetadata(request: ptapi_v1_account_pb.SetUserMetadataRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetUserMetadataResponse) => void): grpc.ClientUnaryCall;
    setUserMetadata(request: ptapi_v1_account_pb.SetUserMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetUserMetadataResponse) => void): grpc.ClientUnaryCall;
    setUserMetadata(request: ptapi_v1_account_pb.SetUserMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetUserMetadataResponse) => void): grpc.ClientUnaryCall;
    setRoleMetadata(request: ptapi_v1_account_pb.SetRoleMetadataRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetRoleMetadataResponse) => void): grpc.ClientUnaryCall;
    setRoleMetadata(request: ptapi_v1_account_pb.SetRoleMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetRoleMetadataResponse) => void): grpc.ClientUnaryCall;
    setRoleMetadata(request: ptapi_v1_account_pb.SetRoleMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetRoleMetadataResponse) => void): grpc.ClientUnaryCall;
}

export class AccountClient extends grpc.Client implements IAccountClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: ptapi_v1_account_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: ptapi_v1_account_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: ptapi_v1_account_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public listRoles(request: ptapi_v1_account_pb.ListRolesRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    public listRoles(request: ptapi_v1_account_pb.ListRolesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    public listRoles(request: ptapi_v1_account_pb.ListRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.ListRolesResponse) => void): grpc.ClientUnaryCall;
    public createRole(request: ptapi_v1_account_pb.CreateRoleRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.CreateRoleResponse) => void): grpc.ClientUnaryCall;
    public createRole(request: ptapi_v1_account_pb.CreateRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.CreateRoleResponse) => void): grpc.ClientUnaryCall;
    public createRole(request: ptapi_v1_account_pb.CreateRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.CreateRoleResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: ptapi_v1_account_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: ptapi_v1_account_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: ptapi_v1_account_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public setUserMetadata(request: ptapi_v1_account_pb.SetUserMetadataRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetUserMetadataResponse) => void): grpc.ClientUnaryCall;
    public setUserMetadata(request: ptapi_v1_account_pb.SetUserMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetUserMetadataResponse) => void): grpc.ClientUnaryCall;
    public setUserMetadata(request: ptapi_v1_account_pb.SetUserMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetUserMetadataResponse) => void): grpc.ClientUnaryCall;
    public setRoleMetadata(request: ptapi_v1_account_pb.SetRoleMetadataRequest, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetRoleMetadataResponse) => void): grpc.ClientUnaryCall;
    public setRoleMetadata(request: ptapi_v1_account_pb.SetRoleMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetRoleMetadataResponse) => void): grpc.ClientUnaryCall;
    public setRoleMetadata(request: ptapi_v1_account_pb.SetRoleMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ptapi_v1_account_pb.SetRoleMetadataResponse) => void): grpc.ClientUnaryCall;
}
