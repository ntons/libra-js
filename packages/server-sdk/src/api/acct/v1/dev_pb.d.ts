// package: libra_acct_v1
// file: acct/v1/dev.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Dev extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): Dev;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dev.AsObject;
    static toObject(includeInstance: boolean, msg: Dev): Dev.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dev, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dev;
    static deserializeBinaryFromReader(message: Dev, reader: jspb.BinaryReader): Dev;
}

export namespace Dev {
    export type AsObject = {
        username: string,
    }
}
