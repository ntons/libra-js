// package: libra.dbapi.v1
// file: dbapi/v1/db.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as dbapi_v1_archive_pb from "../../dbapi/v1/archive_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class RegisterSchemaRequest extends jspb.Message { 

    hasDescriptorSet(): boolean;
    clearDescriptorSet(): void;
    getDescriptorSet(): google_protobuf_descriptor_pb.FileDescriptorSet | undefined;
    setDescriptorSet(value?: google_protobuf_descriptor_pb.FileDescriptorSet): RegisterSchemaRequest;

    getMessageName(): string;
    setMessageName(value: string): RegisterSchemaRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterSchemaRequest): RegisterSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterSchemaRequest;
    static deserializeBinaryFromReader(message: RegisterSchemaRequest, reader: jspb.BinaryReader): RegisterSchemaRequest;
}

export namespace RegisterSchemaRequest {
    export type AsObject = {
        descriptorSet?: google_protobuf_descriptor_pb.FileDescriptorSet.AsObject,
        messageName: string,
    }
}

export class RegisterSchemaResponse extends jspb.Message { 
    getSchema(): string;
    setSchema(value: string): RegisterSchemaResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterSchemaResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterSchemaResponse): RegisterSchemaResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterSchemaResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterSchemaResponse;
    static deserializeBinaryFromReader(message: RegisterSchemaResponse, reader: jspb.BinaryReader): RegisterSchemaResponse;
}

export namespace RegisterSchemaResponse {
    export type AsObject = {
        schema: string,
    }
}

export class ArchiveGetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ArchiveGetRequest;


    hasAddIfNotFound(): boolean;
    clearAddIfNotFound(): void;
    getAddIfNotFound(): dbapi_v1_archive_pb.Archive | undefined;
    setAddIfNotFound(value?: dbapi_v1_archive_pb.Archive): ArchiveGetRequest;

    getWithLock(): boolean;
    setWithLock(value: boolean): ArchiveGetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArchiveGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArchiveGetRequest): ArchiveGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArchiveGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArchiveGetRequest;
    static deserializeBinaryFromReader(message: ArchiveGetRequest, reader: jspb.BinaryReader): ArchiveGetRequest;
}

export namespace ArchiveGetRequest {
    export type AsObject = {
        id: string,
        addIfNotFound?: dbapi_v1_archive_pb.Archive.AsObject,
        withLock: boolean,
    }
}

export class ArchiveGetResponse extends jspb.Message { 

    hasArchive(): boolean;
    clearArchive(): void;
    getArchive(): dbapi_v1_archive_pb.Archive | undefined;
    setArchive(value?: dbapi_v1_archive_pb.Archive): ArchiveGetResponse;

    getToken(): string;
    setToken(value: string): ArchiveGetResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArchiveGetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArchiveGetResponse): ArchiveGetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArchiveGetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArchiveGetResponse;
    static deserializeBinaryFromReader(message: ArchiveGetResponse, reader: jspb.BinaryReader): ArchiveGetResponse;
}

export namespace ArchiveGetResponse {
    export type AsObject = {
        archive?: dbapi_v1_archive_pb.Archive.AsObject,
        token: string,
    }
}

export class ArchiveSetRequest extends jspb.Message { 

    hasArchive(): boolean;
    clearArchive(): void;
    getArchive(): dbapi_v1_archive_pb.Archive | undefined;
    setArchive(value?: dbapi_v1_archive_pb.Archive): ArchiveSetRequest;

    getToken(): string;
    setToken(value: string): ArchiveSetRequest;

    getWithUnlock(): boolean;
    setWithUnlock(value: boolean): ArchiveSetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArchiveSetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArchiveSetRequest): ArchiveSetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArchiveSetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArchiveSetRequest;
    static deserializeBinaryFromReader(message: ArchiveSetRequest, reader: jspb.BinaryReader): ArchiveSetRequest;
}

export namespace ArchiveSetRequest {
    export type AsObject = {
        archive?: dbapi_v1_archive_pb.Archive.AsObject,
        token: string,
        withUnlock: boolean,
    }
}

export class ArchiveSetResponse extends jspb.Message { 

    hasArchive(): boolean;
    clearArchive(): void;
    getArchive(): dbapi_v1_archive_pb.Archive | undefined;
    setArchive(value?: dbapi_v1_archive_pb.Archive): ArchiveSetResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArchiveSetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArchiveSetResponse): ArchiveSetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArchiveSetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArchiveSetResponse;
    static deserializeBinaryFromReader(message: ArchiveSetResponse, reader: jspb.BinaryReader): ArchiveSetResponse;
}

export namespace ArchiveSetResponse {
    export type AsObject = {
        archive?: dbapi_v1_archive_pb.Archive.AsObject,
    }
}
