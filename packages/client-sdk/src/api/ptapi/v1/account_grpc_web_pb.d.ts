import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

import {
  CreateRoleRequest,
  CreateRoleResponse,
  ListRolesRequest,
  ListRolesResponse,
  LoginRequest,
  LoginResponse,
  SetRoleMetadataRequest,
  SetRoleMetadataResponse,
  SetUserMetadataRequest,
  SetUserMetadataResponse,
  SignInRequest,
  SignInResponse} from './account_pb';

export class AccountClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void
  ): grpcWeb.ClientReadableStream<LoginResponse>;

  listRoles(
    request: ListRolesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListRolesResponse) => void
  ): grpcWeb.ClientReadableStream<ListRolesResponse>;

  createRole(
    request: CreateRoleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CreateRoleResponse) => void
  ): grpcWeb.ClientReadableStream<CreateRoleResponse>;

  signIn(
    request: SignInRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SignInResponse) => void
  ): grpcWeb.ClientReadableStream<SignInResponse>;

  setUserMetadata(
    request: SetUserMetadataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SetUserMetadataResponse) => void
  ): grpcWeb.ClientReadableStream<SetUserMetadataResponse>;

  setRoleMetadata(
    request: SetRoleMetadataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SetRoleMetadataResponse) => void
  ): grpcWeb.ClientReadableStream<SetRoleMetadataResponse>;

}

export class AccountPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<LoginResponse>;

  listRoles(
    request: ListRolesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListRolesResponse>;

  createRole(
    request: CreateRoleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CreateRoleResponse>;

  signIn(
    request: SignInRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SignInResponse>;

  setUserMetadata(
    request: SetUserMetadataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SetUserMetadataResponse>;

  setRoleMetadata(
    request: SetRoleMetadataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SetRoleMetadataResponse>;

}

