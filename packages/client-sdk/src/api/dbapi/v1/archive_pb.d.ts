// package: libra.dbapi.v1
// file: dbapi/v1/archive.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Archive extends jspb.Message { 
    getId(): string;
    setId(value: string): Archive;


    hasModel(): boolean;
    clearModel(): void;
    getModel(): google_protobuf_any_pb.Any | undefined;
    setModel(value?: google_protobuf_any_pb.Any): Archive;


    getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
    clearMetadataMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Archive.AsObject;
    static toObject(includeInstance: boolean, msg: Archive): Archive.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Archive, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Archive;
    static deserializeBinaryFromReader(message: Archive, reader: jspb.BinaryReader): Archive;
}

export namespace Archive {
    export type AsObject = {
        id: string,
        model?: google_protobuf_any_pb.Any.AsObject,

        metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    }
}
