// package: libra.sdk.v1
// file: sdk/v1/mvc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class UpdateModelNotice extends jspb.Message { 

    hasModel(): boolean;
    clearModel(): void;
    getModel(): google_protobuf_any_pb.Any | undefined;
    setModel(value?: google_protobuf_any_pb.Any): UpdateModelNotice;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateModelNotice.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateModelNotice): UpdateModelNotice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateModelNotice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateModelNotice;
    static deserializeBinaryFromReader(message: UpdateModelNotice, reader: jspb.BinaryReader): UpdateModelNotice;
}

export namespace UpdateModelNotice {
    export type AsObject = {
        model?: google_protobuf_any_pb.Any.AsObject,
    }
}
