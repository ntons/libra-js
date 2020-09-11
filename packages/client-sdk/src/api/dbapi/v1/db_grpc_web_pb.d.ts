import * as grpcWeb from 'grpc-web';

import * as dbapi_v1_archive_pb from '../../dbapi/v1/archive_pb';
import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';

import {
  ArchiveGetRequest,
  ArchiveGetResponse,
  ArchiveSetRequest,
  ArchiveSetResponse,
  RegisterSchemaRequest,
  RegisterSchemaResponse} from './db_pb';

export class DBClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  registerSchema(
    request: RegisterSchemaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: RegisterSchemaResponse) => void
  ): grpcWeb.ClientReadableStream<RegisterSchemaResponse>;

  lock(
    request: ArchiveGetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ArchiveGetResponse) => void
  ): grpcWeb.ClientReadableStream<ArchiveGetResponse>;

  unlock(
    request: ArchiveSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ArchiveSetResponse) => void
  ): grpcWeb.ClientReadableStream<ArchiveSetResponse>;

  getArchive(
    request: ArchiveGetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ArchiveGetResponse) => void
  ): grpcWeb.ClientReadableStream<ArchiveGetResponse>;

  setArchive(
    request: ArchiveSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ArchiveSetResponse) => void
  ): grpcWeb.ClientReadableStream<ArchiveSetResponse>;

  getModel(
    request: ArchiveGetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ArchiveGetResponse) => void
  ): grpcWeb.ClientReadableStream<ArchiveGetResponse>;

  setModel(
    request: ArchiveSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ArchiveSetResponse) => void
  ): grpcWeb.ClientReadableStream<ArchiveSetResponse>;

  getMetadata(
    request: ArchiveGetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ArchiveGetResponse) => void
  ): grpcWeb.ClientReadableStream<ArchiveGetResponse>;

  setMetadata(
    request: ArchiveSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ArchiveSetResponse) => void
  ): grpcWeb.ClientReadableStream<ArchiveSetResponse>;

}

export class DBPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  registerSchema(
    request: RegisterSchemaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<RegisterSchemaResponse>;

  lock(
    request: ArchiveGetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ArchiveGetResponse>;

  unlock(
    request: ArchiveSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ArchiveSetResponse>;

  getArchive(
    request: ArchiveGetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ArchiveGetResponse>;

  setArchive(
    request: ArchiveSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ArchiveSetResponse>;

  getModel(
    request: ArchiveGetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ArchiveGetResponse>;

  setModel(
    request: ArchiveSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ArchiveSetResponse>;

  getMetadata(
    request: ArchiveGetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ArchiveGetResponse>;

  setMetadata(
    request: ArchiveSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ArchiveSetResponse>;

}

