// package: libra.sdk.v1
// file: sdk/v1/config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Endpoint extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): Endpoint;

    getAuthority(): string;
    setAuthority(value: string): Endpoint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Endpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Endpoint;
    static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
    export type AsObject = {
        address: string,
        authority: string,
    }
}

export class ServerConfig extends jspb.Message { 
    getBind(): string;
    setBind(value: string): ServerConfig;


    hasAccessPoint(): boolean;
    clearAccessPoint(): void;
    getAccessPoint(): Endpoint | undefined;
    setAccessPoint(value?: Endpoint): ServerConfig;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ServerConfig): ServerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerConfig;
    static deserializeBinaryFromReader(message: ServerConfig, reader: jspb.BinaryReader): ServerConfig;
}

export namespace ServerConfig {
    export type AsObject = {
        bind: string,
        accessPoint?: Endpoint.AsObject,
    }
}
