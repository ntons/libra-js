// package: libra.ptapi.v1
// file: ptapi/v1/account.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;

    getAppId(): string;
    setAppId(value: string): User;

    getAcctSrc(): string;
    setAcctSrc(value: string): User;

    getAcctId(): string;
    setAcctId(value: string): User;


    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        appId: string,
        acctSrc: string,
        acctId: string,

        metadataMap: Array<[string, string]>,
    }
}

export class Role extends jspb.Message { 
    getId(): string;
    setId(value: string): Role;

    getAppId(): string;
    setAppId(value: string): Role;

    getUserId(): string;
    setUserId(value: string): Role;


    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Role.AsObject;
    static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Role;
    static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
    export type AsObject = {
        id: string,
        appId: string,
        userId: string,

        metadataMap: Array<[string, string]>,
    }
}

export class LoginRequest extends jspb.Message { 
    getAppId(): string;
    setAppId(value: string): LoginRequest;


    hasState(): boolean;
    clearState(): void;
    getState(): google_protobuf_any_pb.Any | undefined;
    setState(value?: google_protobuf_any_pb.Any): LoginRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        appId: string,
        state?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class LoginResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): LoginResponse;


    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): LoginResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        token: string,
        user?: User.AsObject,
    }
}

export class ListRolesRequest extends jspb.Message { 
    getAppId(): string;
    setAppId(value: string): ListRolesRequest;

    getToken(): string;
    setToken(value: string): ListRolesRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRolesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRolesRequest): ListRolesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRolesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRolesRequest;
    static deserializeBinaryFromReader(message: ListRolesRequest, reader: jspb.BinaryReader): ListRolesRequest;
}

export namespace ListRolesRequest {
    export type AsObject = {
        appId: string,
        token: string,
    }
}

export class ListRolesResponse extends jspb.Message { 
    clearRolesList(): void;
    getRolesList(): Array<Role>;
    setRolesList(value: Array<Role>): ListRolesResponse;
    addRoles(value?: Role, index?: number): Role;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRolesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRolesResponse): ListRolesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRolesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRolesResponse;
    static deserializeBinaryFromReader(message: ListRolesResponse, reader: jspb.BinaryReader): ListRolesResponse;
}

export namespace ListRolesResponse {
    export type AsObject = {
        rolesList: Array<Role.AsObject>,
    }
}

export class CreateRoleRequest extends jspb.Message { 
    getAppId(): string;
    setAppId(value: string): CreateRoleRequest;

    getToken(): string;
    setToken(value: string): CreateRoleRequest;

    getIndex(): number;
    setIndex(value: number): CreateRoleRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRoleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRoleRequest): CreateRoleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRoleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRoleRequest;
    static deserializeBinaryFromReader(message: CreateRoleRequest, reader: jspb.BinaryReader): CreateRoleRequest;
}

export namespace CreateRoleRequest {
    export type AsObject = {
        appId: string,
        token: string,
        index: number,
    }
}

export class CreateRoleResponse extends jspb.Message { 

    hasRole(): boolean;
    clearRole(): void;
    getRole(): Role | undefined;
    setRole(value?: Role): CreateRoleResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRoleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRoleResponse): CreateRoleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRoleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRoleResponse;
    static deserializeBinaryFromReader(message: CreateRoleResponse, reader: jspb.BinaryReader): CreateRoleResponse;
}

export namespace CreateRoleResponse {
    export type AsObject = {
        role?: Role.AsObject,
    }
}

export class SignInRequest extends jspb.Message { 
    getAppId(): string;
    setAppId(value: string): SignInRequest;

    getToken(): string;
    setToken(value: string): SignInRequest;

    getRoleId(): string;
    setRoleId(value: string): SignInRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInRequest;
    static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
    export type AsObject = {
        appId: string,
        token: string,
        roleId: string,
    }
}

export class SignInResponse extends jspb.Message { 
    getTicket(): string;
    setTicket(value: string): SignInResponse;


    hasRole(): boolean;
    clearRole(): void;
    getRole(): Role | undefined;
    setRole(value?: Role): SignInResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignInResponse): SignInResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInResponse;
    static deserializeBinaryFromReader(message: SignInResponse, reader: jspb.BinaryReader): SignInResponse;
}

export namespace SignInResponse {
    export type AsObject = {
        ticket: string,
        role?: Role.AsObject,
    }
}

export class SetUserMetadataRequest extends jspb.Message { 
    getAppId(): string;
    setAppId(value: string): SetUserMetadataRequest;

    getToken(): string;
    setToken(value: string): SetUserMetadataRequest;


    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserMetadataRequest): SetUserMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserMetadataRequest;
    static deserializeBinaryFromReader(message: SetUserMetadataRequest, reader: jspb.BinaryReader): SetUserMetadataRequest;
}

export namespace SetUserMetadataRequest {
    export type AsObject = {
        appId: string,
        token: string,

        metadataMap: Array<[string, string]>,
    }
}

export class SetUserMetadataResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserMetadataResponse): SetUserMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserMetadataResponse;
    static deserializeBinaryFromReader(message: SetUserMetadataResponse, reader: jspb.BinaryReader): SetUserMetadataResponse;
}

export namespace SetUserMetadataResponse {
    export type AsObject = {
    }
}

export class SetRoleMetadataRequest extends jspb.Message { 
    getAppId(): string;
    setAppId(value: string): SetRoleMetadataRequest;

    getToken(): string;
    setToken(value: string): SetRoleMetadataRequest;

    getRoleId(): string;
    setRoleId(value: string): SetRoleMetadataRequest;


    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRoleMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetRoleMetadataRequest): SetRoleMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRoleMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRoleMetadataRequest;
    static deserializeBinaryFromReader(message: SetRoleMetadataRequest, reader: jspb.BinaryReader): SetRoleMetadataRequest;
}

export namespace SetRoleMetadataRequest {
    export type AsObject = {
        appId: string,
        token: string,
        roleId: string,

        metadataMap: Array<[string, string]>,
    }
}

export class SetRoleMetadataResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRoleMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetRoleMetadataResponse): SetRoleMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRoleMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRoleMetadataResponse;
    static deserializeBinaryFromReader(message: SetRoleMetadataResponse, reader: jspb.BinaryReader): SetRoleMetadataResponse;
}

export namespace SetRoleMetadataResponse {
    export type AsObject = {
    }
}
