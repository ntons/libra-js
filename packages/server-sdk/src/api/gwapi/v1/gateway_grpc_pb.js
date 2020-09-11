// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var gwapi_v1_gateway_pb = require('../../gwapi/v1/gateway_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_libra_gwapi_v1_PushRequest(arg) {
  if (!(arg instanceof gwapi_v1_gateway_pb.PushRequest)) {
    throw new Error('Expected argument of type libra.gwapi.v1.PushRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_gwapi_v1_PushRequest(buffer_arg) {
  return gwapi_v1_gateway_pb.PushRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_gwapi_v1_PushResponse(arg) {
  if (!(arg instanceof gwapi_v1_gateway_pb.PushResponse)) {
    throw new Error('Expected argument of type libra.gwapi.v1.PushResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_gwapi_v1_PushResponse(buffer_arg) {
  return gwapi_v1_gateway_pb.PushResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_gwapi_v1_SubscribeRequest(arg) {
  if (!(arg instanceof gwapi_v1_gateway_pb.SubscribeRequest)) {
    throw new Error('Expected argument of type libra.gwapi.v1.SubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_gwapi_v1_SubscribeRequest(buffer_arg) {
  return gwapi_v1_gateway_pb.SubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_gwapi_v1_SubscribeResponse(arg) {
  if (!(arg instanceof gwapi_v1_gateway_pb.SubscribeResponse)) {
    throw new Error('Expected argument of type libra.gwapi.v1.SubscribeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_gwapi_v1_SubscribeResponse(buffer_arg) {
  return gwapi_v1_gateway_pb.SubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GatewayService = exports.GatewayService = {
  // Push message to client
push: {
    path: '/libra.gwapi.v1.Gateway/Push',
    requestStream: false,
    responseStream: false,
    requestType: gwapi_v1_gateway_pb.PushRequest,
    responseType: gwapi_v1_gateway_pb.PushResponse,
    requestSerialize: serialize_libra_gwapi_v1_PushRequest,
    requestDeserialize: deserialize_libra_gwapi_v1_PushRequest,
    responseSerialize: serialize_libra_gwapi_v1_PushResponse,
    responseDeserialize: deserialize_libra_gwapi_v1_PushResponse,
  },
  // Subscribe a broadcast channel
subscribe: {
    path: '/libra.gwapi.v1.Gateway/Subscribe',
    requestStream: false,
    responseStream: false,
    requestType: gwapi_v1_gateway_pb.SubscribeRequest,
    responseType: gwapi_v1_gateway_pb.SubscribeResponse,
    requestSerialize: serialize_libra_gwapi_v1_SubscribeRequest,
    requestDeserialize: deserialize_libra_gwapi_v1_SubscribeRequest,
    responseSerialize: serialize_libra_gwapi_v1_SubscribeResponse,
    responseDeserialize: deserialize_libra_gwapi_v1_SubscribeResponse,
  },
};

exports.GatewayClient = grpc.makeGenericClientConstructor(GatewayService);
