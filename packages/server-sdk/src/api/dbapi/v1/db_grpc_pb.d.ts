// package: libra.dbapi.v1
// file: dbapi/v1/db.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as dbapi_v1_db_pb from "../../dbapi/v1/db_pb";
import * as dbapi_v1_archive_pb from "../../dbapi/v1/archive_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

interface IDBService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerSchema: IDBService_IRegisterSchema;
    lock: IDBService_ILock;
    unlock: IDBService_IUnlock;
    getArchive: IDBService_IGetArchive;
    setArchive: IDBService_ISetArchive;
    getModel: IDBService_IGetModel;
    setModel: IDBService_ISetModel;
    getMetadata: IDBService_IGetMetadata;
    setMetadata: IDBService_ISetMetadata;
}

interface IDBService_IRegisterSchema extends grpc.MethodDefinition<dbapi_v1_db_pb.RegisterSchemaRequest, dbapi_v1_db_pb.RegisterSchemaResponse> {
    path: string; // "/libra.dbapi.v1.DB/RegisterSchema"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dbapi_v1_db_pb.RegisterSchemaRequest>;
    requestDeserialize: grpc.deserialize<dbapi_v1_db_pb.RegisterSchemaRequest>;
    responseSerialize: grpc.serialize<dbapi_v1_db_pb.RegisterSchemaResponse>;
    responseDeserialize: grpc.deserialize<dbapi_v1_db_pb.RegisterSchemaResponse>;
}
interface IDBService_ILock extends grpc.MethodDefinition<dbapi_v1_db_pb.ArchiveGetRequest, dbapi_v1_db_pb.ArchiveGetResponse> {
    path: string; // "/libra.dbapi.v1.DB/Lock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveGetRequest>;
    requestDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveGetRequest>;
    responseSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveGetResponse>;
    responseDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveGetResponse>;
}
interface IDBService_IUnlock extends grpc.MethodDefinition<dbapi_v1_db_pb.ArchiveSetRequest, dbapi_v1_db_pb.ArchiveSetResponse> {
    path: string; // "/libra.dbapi.v1.DB/Unlock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveSetRequest>;
    requestDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveSetRequest>;
    responseSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveSetResponse>;
    responseDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveSetResponse>;
}
interface IDBService_IGetArchive extends grpc.MethodDefinition<dbapi_v1_db_pb.ArchiveGetRequest, dbapi_v1_db_pb.ArchiveGetResponse> {
    path: string; // "/libra.dbapi.v1.DB/GetArchive"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveGetRequest>;
    requestDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveGetRequest>;
    responseSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveGetResponse>;
    responseDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveGetResponse>;
}
interface IDBService_ISetArchive extends grpc.MethodDefinition<dbapi_v1_db_pb.ArchiveSetRequest, dbapi_v1_db_pb.ArchiveSetResponse> {
    path: string; // "/libra.dbapi.v1.DB/SetArchive"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveSetRequest>;
    requestDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveSetRequest>;
    responseSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveSetResponse>;
    responseDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveSetResponse>;
}
interface IDBService_IGetModel extends grpc.MethodDefinition<dbapi_v1_db_pb.ArchiveGetRequest, dbapi_v1_db_pb.ArchiveGetResponse> {
    path: string; // "/libra.dbapi.v1.DB/GetModel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveGetRequest>;
    requestDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveGetRequest>;
    responseSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveGetResponse>;
    responseDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveGetResponse>;
}
interface IDBService_ISetModel extends grpc.MethodDefinition<dbapi_v1_db_pb.ArchiveSetRequest, dbapi_v1_db_pb.ArchiveSetResponse> {
    path: string; // "/libra.dbapi.v1.DB/SetModel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveSetRequest>;
    requestDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveSetRequest>;
    responseSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveSetResponse>;
    responseDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveSetResponse>;
}
interface IDBService_IGetMetadata extends grpc.MethodDefinition<dbapi_v1_db_pb.ArchiveGetRequest, dbapi_v1_db_pb.ArchiveGetResponse> {
    path: string; // "/libra.dbapi.v1.DB/GetMetadata"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveGetRequest>;
    requestDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveGetRequest>;
    responseSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveGetResponse>;
    responseDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveGetResponse>;
}
interface IDBService_ISetMetadata extends grpc.MethodDefinition<dbapi_v1_db_pb.ArchiveSetRequest, dbapi_v1_db_pb.ArchiveSetResponse> {
    path: string; // "/libra.dbapi.v1.DB/SetMetadata"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveSetRequest>;
    requestDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveSetRequest>;
    responseSerialize: grpc.serialize<dbapi_v1_db_pb.ArchiveSetResponse>;
    responseDeserialize: grpc.deserialize<dbapi_v1_db_pb.ArchiveSetResponse>;
}

export const DBService: IDBService;

export interface IDBServer {
    registerSchema: grpc.handleUnaryCall<dbapi_v1_db_pb.RegisterSchemaRequest, dbapi_v1_db_pb.RegisterSchemaResponse>;
    lock: grpc.handleUnaryCall<dbapi_v1_db_pb.ArchiveGetRequest, dbapi_v1_db_pb.ArchiveGetResponse>;
    unlock: grpc.handleUnaryCall<dbapi_v1_db_pb.ArchiveSetRequest, dbapi_v1_db_pb.ArchiveSetResponse>;
    getArchive: grpc.handleUnaryCall<dbapi_v1_db_pb.ArchiveGetRequest, dbapi_v1_db_pb.ArchiveGetResponse>;
    setArchive: grpc.handleUnaryCall<dbapi_v1_db_pb.ArchiveSetRequest, dbapi_v1_db_pb.ArchiveSetResponse>;
    getModel: grpc.handleUnaryCall<dbapi_v1_db_pb.ArchiveGetRequest, dbapi_v1_db_pb.ArchiveGetResponse>;
    setModel: grpc.handleUnaryCall<dbapi_v1_db_pb.ArchiveSetRequest, dbapi_v1_db_pb.ArchiveSetResponse>;
    getMetadata: grpc.handleUnaryCall<dbapi_v1_db_pb.ArchiveGetRequest, dbapi_v1_db_pb.ArchiveGetResponse>;
    setMetadata: grpc.handleUnaryCall<dbapi_v1_db_pb.ArchiveSetRequest, dbapi_v1_db_pb.ArchiveSetResponse>;
}

export interface IDBClient {
    registerSchema(request: dbapi_v1_db_pb.RegisterSchemaRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.RegisterSchemaResponse) => void): grpc.ClientUnaryCall;
    registerSchema(request: dbapi_v1_db_pb.RegisterSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.RegisterSchemaResponse) => void): grpc.ClientUnaryCall;
    registerSchema(request: dbapi_v1_db_pb.RegisterSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.RegisterSchemaResponse) => void): grpc.ClientUnaryCall;
    lock(request: dbapi_v1_db_pb.ArchiveGetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    lock(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    lock(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    unlock(request: dbapi_v1_db_pb.ArchiveSetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    unlock(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    unlock(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    getArchive(request: dbapi_v1_db_pb.ArchiveGetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    getArchive(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    getArchive(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    setArchive(request: dbapi_v1_db_pb.ArchiveSetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    setArchive(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    setArchive(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    getModel(request: dbapi_v1_db_pb.ArchiveGetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    getModel(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    getModel(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    setModel(request: dbapi_v1_db_pb.ArchiveSetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    setModel(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    setModel(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    getMetadata(request: dbapi_v1_db_pb.ArchiveGetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    getMetadata(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    getMetadata(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    setMetadata(request: dbapi_v1_db_pb.ArchiveSetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    setMetadata(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    setMetadata(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
}

export class DBClient extends grpc.Client implements IDBClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public registerSchema(request: dbapi_v1_db_pb.RegisterSchemaRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.RegisterSchemaResponse) => void): grpc.ClientUnaryCall;
    public registerSchema(request: dbapi_v1_db_pb.RegisterSchemaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.RegisterSchemaResponse) => void): grpc.ClientUnaryCall;
    public registerSchema(request: dbapi_v1_db_pb.RegisterSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.RegisterSchemaResponse) => void): grpc.ClientUnaryCall;
    public lock(request: dbapi_v1_db_pb.ArchiveGetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public lock(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public lock(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public unlock(request: dbapi_v1_db_pb.ArchiveSetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public unlock(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public unlock(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public getArchive(request: dbapi_v1_db_pb.ArchiveGetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public getArchive(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public getArchive(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public setArchive(request: dbapi_v1_db_pb.ArchiveSetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public setArchive(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public setArchive(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public getModel(request: dbapi_v1_db_pb.ArchiveGetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public getModel(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public getModel(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public setModel(request: dbapi_v1_db_pb.ArchiveSetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public setModel(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public setModel(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public getMetadata(request: dbapi_v1_db_pb.ArchiveGetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public getMetadata(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public getMetadata(request: dbapi_v1_db_pb.ArchiveGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveGetResponse) => void): grpc.ClientUnaryCall;
    public setMetadata(request: dbapi_v1_db_pb.ArchiveSetRequest, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public setMetadata(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
    public setMetadata(request: dbapi_v1_db_pb.ArchiveSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dbapi_v1_db_pb.ArchiveSetResponse) => void): grpc.ClientUnaryCall;
}
