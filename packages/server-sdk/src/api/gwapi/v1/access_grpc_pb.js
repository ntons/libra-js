// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var gwapi_v1_access_pb = require('../../gwapi/v1/access_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_google_protobuf_Any(arg) {
  if (!(arg instanceof google_protobuf_any_pb.Any)) {
    throw new Error('Expected argument of type google.protobuf.Any');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Any(buffer_arg) {
  return google_protobuf_any_pb.Any.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_gwapi_v1_SignInRequest(arg) {
  if (!(arg instanceof gwapi_v1_access_pb.SignInRequest)) {
    throw new Error('Expected argument of type libra.gwapi.v1.SignInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_gwapi_v1_SignInRequest(buffer_arg) {
  return gwapi_v1_access_pb.SignInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccessService = exports.AccessService = {
  // Establish the push stream
signIn: {
    path: '/libra.gwapi.v1.Access/SignIn',
    requestStream: false,
    responseStream: true,
    requestType: gwapi_v1_access_pb.SignInRequest,
    responseType: google_protobuf_any_pb.Any,
    requestSerialize: serialize_libra_gwapi_v1_SignInRequest,
    requestDeserialize: deserialize_libra_gwapi_v1_SignInRequest,
    responseSerialize: serialize_google_protobuf_Any,
    responseDeserialize: deserialize_google_protobuf_Any,
  },
};

exports.AccessClient = grpc.makeGenericClientConstructor(AccessService);
