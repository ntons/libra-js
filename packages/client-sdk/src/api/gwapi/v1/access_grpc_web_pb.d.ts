import * as grpcWeb from 'grpc-web';

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

import {SignInRequest} from './access_pb';

export class AccessClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  signIn(
    request: SignInRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_protobuf_any_pb.Any>;

}

export class AccessPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  signIn(
    request: SignInRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_protobuf_any_pb.Any>;

}

