import * as grpcWeb from 'grpc-web';

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

import {
  PushRequest,
  PushResponse,
  SubscribeRequest,
  SubscribeResponse} from './gateway_pb';

export class GatewayClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  push(
    request: PushRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PushResponse) => void
  ): grpcWeb.ClientReadableStream<PushResponse>;

  subscribe(
    request: SubscribeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SubscribeResponse) => void
  ): grpcWeb.ClientReadableStream<SubscribeResponse>;

}

export class GatewayPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  push(
    request: PushRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PushResponse>;

  subscribe(
    request: SubscribeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SubscribeResponse>;

}

