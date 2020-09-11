// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dbapi_v1_db_pb = require('../../dbapi/v1/db_pb.js');
var dbapi_v1_archive_pb = require('../../dbapi/v1/archive_pb.js');
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');

function serialize_libra_dbapi_v1_ArchiveGetRequest(arg) {
  if (!(arg instanceof dbapi_v1_db_pb.ArchiveGetRequest)) {
    throw new Error('Expected argument of type libra.dbapi.v1.ArchiveGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_dbapi_v1_ArchiveGetRequest(buffer_arg) {
  return dbapi_v1_db_pb.ArchiveGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_dbapi_v1_ArchiveGetResponse(arg) {
  if (!(arg instanceof dbapi_v1_db_pb.ArchiveGetResponse)) {
    throw new Error('Expected argument of type libra.dbapi.v1.ArchiveGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_dbapi_v1_ArchiveGetResponse(buffer_arg) {
  return dbapi_v1_db_pb.ArchiveGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_dbapi_v1_ArchiveSetRequest(arg) {
  if (!(arg instanceof dbapi_v1_db_pb.ArchiveSetRequest)) {
    throw new Error('Expected argument of type libra.dbapi.v1.ArchiveSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_dbapi_v1_ArchiveSetRequest(buffer_arg) {
  return dbapi_v1_db_pb.ArchiveSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_dbapi_v1_ArchiveSetResponse(arg) {
  if (!(arg instanceof dbapi_v1_db_pb.ArchiveSetResponse)) {
    throw new Error('Expected argument of type libra.dbapi.v1.ArchiveSetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_dbapi_v1_ArchiveSetResponse(buffer_arg) {
  return dbapi_v1_db_pb.ArchiveSetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_dbapi_v1_RegisterSchemaRequest(arg) {
  if (!(arg instanceof dbapi_v1_db_pb.RegisterSchemaRequest)) {
    throw new Error('Expected argument of type libra.dbapi.v1.RegisterSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_dbapi_v1_RegisterSchemaRequest(buffer_arg) {
  return dbapi_v1_db_pb.RegisterSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_libra_dbapi_v1_RegisterSchemaResponse(arg) {
  if (!(arg instanceof dbapi_v1_db_pb.RegisterSchemaResponse)) {
    throw new Error('Expected argument of type libra.dbapi.v1.RegisterSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_libra_dbapi_v1_RegisterSchemaResponse(buffer_arg) {
  return dbapi_v1_db_pb.RegisterSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DBService = exports.DBService = {
  registerSchema: {
    path: '/libra.dbapi.v1.DB/RegisterSchema',
    requestStream: false,
    responseStream: false,
    requestType: dbapi_v1_db_pb.RegisterSchemaRequest,
    responseType: dbapi_v1_db_pb.RegisterSchemaResponse,
    requestSerialize: serialize_libra_dbapi_v1_RegisterSchemaRequest,
    requestDeserialize: deserialize_libra_dbapi_v1_RegisterSchemaRequest,
    responseSerialize: serialize_libra_dbapi_v1_RegisterSchemaResponse,
    responseDeserialize: deserialize_libra_dbapi_v1_RegisterSchemaResponse,
  },
  // lock/unlock archive mutex
lock: {
    path: '/libra.dbapi.v1.DB/Lock',
    requestStream: false,
    responseStream: false,
    requestType: dbapi_v1_db_pb.ArchiveGetRequest,
    responseType: dbapi_v1_db_pb.ArchiveGetResponse,
    requestSerialize: serialize_libra_dbapi_v1_ArchiveGetRequest,
    requestDeserialize: deserialize_libra_dbapi_v1_ArchiveGetRequest,
    responseSerialize: serialize_libra_dbapi_v1_ArchiveGetResponse,
    responseDeserialize: deserialize_libra_dbapi_v1_ArchiveGetResponse,
  },
  unlock: {
    path: '/libra.dbapi.v1.DB/Unlock',
    requestStream: false,
    responseStream: false,
    requestType: dbapi_v1_db_pb.ArchiveSetRequest,
    responseType: dbapi_v1_db_pb.ArchiveSetResponse,
    requestSerialize: serialize_libra_dbapi_v1_ArchiveSetRequest,
    requestDeserialize: deserialize_libra_dbapi_v1_ArchiveSetRequest,
    responseSerialize: serialize_libra_dbapi_v1_ArchiveSetResponse,
    responseDeserialize: deserialize_libra_dbapi_v1_ArchiveSetResponse,
  },
  // get/set whole archive
getArchive: {
    path: '/libra.dbapi.v1.DB/GetArchive',
    requestStream: false,
    responseStream: false,
    requestType: dbapi_v1_db_pb.ArchiveGetRequest,
    responseType: dbapi_v1_db_pb.ArchiveGetResponse,
    requestSerialize: serialize_libra_dbapi_v1_ArchiveGetRequest,
    requestDeserialize: deserialize_libra_dbapi_v1_ArchiveGetRequest,
    responseSerialize: serialize_libra_dbapi_v1_ArchiveGetResponse,
    responseDeserialize: deserialize_libra_dbapi_v1_ArchiveGetResponse,
  },
  setArchive: {
    path: '/libra.dbapi.v1.DB/SetArchive',
    requestStream: false,
    responseStream: false,
    requestType: dbapi_v1_db_pb.ArchiveSetRequest,
    responseType: dbapi_v1_db_pb.ArchiveSetResponse,
    requestSerialize: serialize_libra_dbapi_v1_ArchiveSetRequest,
    requestDeserialize: deserialize_libra_dbapi_v1_ArchiveSetRequest,
    responseSerialize: serialize_libra_dbapi_v1_ArchiveSetResponse,
    responseDeserialize: deserialize_libra_dbapi_v1_ArchiveSetResponse,
  },
  // get/set archive model
getModel: {
    path: '/libra.dbapi.v1.DB/GetModel',
    requestStream: false,
    responseStream: false,
    requestType: dbapi_v1_db_pb.ArchiveGetRequest,
    responseType: dbapi_v1_db_pb.ArchiveGetResponse,
    requestSerialize: serialize_libra_dbapi_v1_ArchiveGetRequest,
    requestDeserialize: deserialize_libra_dbapi_v1_ArchiveGetRequest,
    responseSerialize: serialize_libra_dbapi_v1_ArchiveGetResponse,
    responseDeserialize: deserialize_libra_dbapi_v1_ArchiveGetResponse,
  },
  setModel: {
    path: '/libra.dbapi.v1.DB/SetModel',
    requestStream: false,
    responseStream: false,
    requestType: dbapi_v1_db_pb.ArchiveSetRequest,
    responseType: dbapi_v1_db_pb.ArchiveSetResponse,
    requestSerialize: serialize_libra_dbapi_v1_ArchiveSetRequest,
    requestDeserialize: deserialize_libra_dbapi_v1_ArchiveSetRequest,
    responseSerialize: serialize_libra_dbapi_v1_ArchiveSetResponse,
    responseDeserialize: deserialize_libra_dbapi_v1_ArchiveSetResponse,
  },
  // get/set archive metadata
getMetadata: {
    path: '/libra.dbapi.v1.DB/GetMetadata',
    requestStream: false,
    responseStream: false,
    requestType: dbapi_v1_db_pb.ArchiveGetRequest,
    responseType: dbapi_v1_db_pb.ArchiveGetResponse,
    requestSerialize: serialize_libra_dbapi_v1_ArchiveGetRequest,
    requestDeserialize: deserialize_libra_dbapi_v1_ArchiveGetRequest,
    responseSerialize: serialize_libra_dbapi_v1_ArchiveGetResponse,
    responseDeserialize: deserialize_libra_dbapi_v1_ArchiveGetResponse,
  },
  setMetadata: {
    path: '/libra.dbapi.v1.DB/SetMetadata',
    requestStream: false,
    responseStream: false,
    requestType: dbapi_v1_db_pb.ArchiveSetRequest,
    responseType: dbapi_v1_db_pb.ArchiveSetResponse,
    requestSerialize: serialize_libra_dbapi_v1_ArchiveSetRequest,
    requestDeserialize: deserialize_libra_dbapi_v1_ArchiveSetRequest,
    responseSerialize: serialize_libra_dbapi_v1_ArchiveSetResponse,
    responseDeserialize: deserialize_libra_dbapi_v1_ArchiveSetResponse,
  },
};

exports.DBClient = grpc.makeGenericClientConstructor(DBService);
