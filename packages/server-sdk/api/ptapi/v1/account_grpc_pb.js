// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// portal account service
// 1. Login to the user supplier, then an account login state can be got.
// 2. Login pt with account state, a token will be returned for identifing user.
// 3. List roles and select or create one to sign in, a ticket will be returned.
// 4. Communicate with libra grpc servers with above ticket
'use strict';
var grpc = require('grpc');
var ptapi_v1_account_pb = require('../../ptapi/v1/account_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_libra_ptapi_v1_CreateRoleRequest(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.CreateRoleRequest)) {
    throw new Error('Expected argument of type libra.ptapi.v1.CreateRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_CreateRoleRequest(buffer_arg) {
  return ptapi_v1_account_pb.CreateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_CreateRoleResponse(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.CreateRoleResponse)) {
    throw new Error('Expected argument of type libra.ptapi.v1.CreateRoleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_CreateRoleResponse(buffer_arg) {
  return ptapi_v1_account_pb.CreateRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_ListRolesRequest(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type libra.ptapi.v1.ListRolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_ListRolesRequest(buffer_arg) {
  return ptapi_v1_account_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_ListRolesResponse(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type libra.ptapi.v1.ListRolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_ListRolesResponse(buffer_arg) {
  return ptapi_v1_account_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_LoginRequest(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.LoginRequest)) {
    throw new Error('Expected argument of type libra.ptapi.v1.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_LoginRequest(buffer_arg) {
  return ptapi_v1_account_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_LoginResponse(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.LoginResponse)) {
    throw new Error('Expected argument of type libra.ptapi.v1.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_LoginResponse(buffer_arg) {
  return ptapi_v1_account_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_SetRoleMetadataRequest(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.SetRoleMetadataRequest)) {
    throw new Error('Expected argument of type libra.ptapi.v1.SetRoleMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_SetRoleMetadataRequest(buffer_arg) {
  return ptapi_v1_account_pb.SetRoleMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_SetRoleMetadataResponse(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.SetRoleMetadataResponse)) {
    throw new Error('Expected argument of type libra.ptapi.v1.SetRoleMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_SetRoleMetadataResponse(buffer_arg) {
  return ptapi_v1_account_pb.SetRoleMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_SetUserMetadataRequest(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.SetUserMetadataRequest)) {
    throw new Error('Expected argument of type libra.ptapi.v1.SetUserMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_SetUserMetadataRequest(buffer_arg) {
  return ptapi_v1_account_pb.SetUserMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_SetUserMetadataResponse(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.SetUserMetadataResponse)) {
    throw new Error('Expected argument of type libra.ptapi.v1.SetUserMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_SetUserMetadataResponse(buffer_arg) {
  return ptapi_v1_account_pb.SetUserMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_SignInRequest(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.SignInRequest)) {
    throw new Error('Expected argument of type libra.ptapi.v1.SignInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_SignInRequest(buffer_arg) {
  return ptapi_v1_account_pb.SignInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_ptapi_v1_SignInResponse(arg) {
  if (!(arg instanceof ptapi_v1_account_pb.SignInResponse)) {
    throw new Error('Expected argument of type libra.ptapi.v1.SignInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_ptapi_v1_SignInResponse(buffer_arg) {
  return ptapi_v1_account_pb.SignInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountService = exports.AccountService = {
  login: {
    path: '/libra.ptapi.v1.Account/Login',
    requestStream: false,
    responseStream: false,
    requestType: ptapi_v1_account_pb.LoginRequest,
    responseType: ptapi_v1_account_pb.LoginResponse,
    requestSerialize: serialize_libra_ptapi_v1_LoginRequest,
    requestDeserialize: deserialize_libra_ptapi_v1_LoginRequest,
    responseSerialize: serialize_libra_ptapi_v1_LoginResponse,
    responseDeserialize: deserialize_libra_ptapi_v1_LoginResponse,
  },
  listRoles: {
    path: '/libra.ptapi.v1.Account/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: ptapi_v1_account_pb.ListRolesRequest,
    responseType: ptapi_v1_account_pb.ListRolesResponse,
    requestSerialize: serialize_libra_ptapi_v1_ListRolesRequest,
    requestDeserialize: deserialize_libra_ptapi_v1_ListRolesRequest,
    responseSerialize: serialize_libra_ptapi_v1_ListRolesResponse,
    responseDeserialize: deserialize_libra_ptapi_v1_ListRolesResponse,
  },
  createRole: {
    path: '/libra.ptapi.v1.Account/CreateRole',
    requestStream: false,
    responseStream: false,
    requestType: ptapi_v1_account_pb.CreateRoleRequest,
    responseType: ptapi_v1_account_pb.CreateRoleResponse,
    requestSerialize: serialize_libra_ptapi_v1_CreateRoleRequest,
    requestDeserialize: deserialize_libra_ptapi_v1_CreateRoleRequest,
    responseSerialize: serialize_libra_ptapi_v1_CreateRoleResponse,
    responseDeserialize: deserialize_libra_ptapi_v1_CreateRoleResponse,
  },
  signIn: {
    path: '/libra.ptapi.v1.Account/SignIn',
    requestStream: false,
    responseStream: false,
    requestType: ptapi_v1_account_pb.SignInRequest,
    responseType: ptapi_v1_account_pb.SignInResponse,
    requestSerialize: serialize_libra_ptapi_v1_SignInRequest,
    requestDeserialize: deserialize_libra_ptapi_v1_SignInRequest,
    responseSerialize: serialize_libra_ptapi_v1_SignInResponse,
    responseDeserialize: deserialize_libra_ptapi_v1_SignInResponse,
  },
  setUserMetadata: {
    path: '/libra.ptapi.v1.Account/SetUserMetadata',
    requestStream: false,
    responseStream: false,
    requestType: ptapi_v1_account_pb.SetUserMetadataRequest,
    responseType: ptapi_v1_account_pb.SetUserMetadataResponse,
    requestSerialize: serialize_libra_ptapi_v1_SetUserMetadataRequest,
    requestDeserialize: deserialize_libra_ptapi_v1_SetUserMetadataRequest,
    responseSerialize: serialize_libra_ptapi_v1_SetUserMetadataResponse,
    responseDeserialize: deserialize_libra_ptapi_v1_SetUserMetadataResponse,
  },
  setRoleMetadata: {
    path: '/libra.ptapi.v1.Account/SetRoleMetadata',
    requestStream: false,
    responseStream: false,
    requestType: ptapi_v1_account_pb.SetRoleMetadataRequest,
    responseType: ptapi_v1_account_pb.SetRoleMetadataResponse,
    requestSerialize: serialize_libra_ptapi_v1_SetRoleMetadataRequest,
    requestDeserialize: deserialize_libra_ptapi_v1_SetRoleMetadataRequest,
    responseSerialize: serialize_libra_ptapi_v1_SetRoleMetadataResponse,
    responseDeserialize: deserialize_libra_ptapi_v1_SetRoleMetadataResponse,
  },
};

exports.AccountClient = grpc.makeGenericClientConstructor(AccountService);
