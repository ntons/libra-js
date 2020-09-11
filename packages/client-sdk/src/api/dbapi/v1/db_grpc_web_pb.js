/**
 * @fileoverview gRPC-Web generated client stub for libra.dbapi.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var dbapi_v1_archive_pb = require('../../dbapi/v1/archive_pb.js')

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js')
const proto = {};
proto.libra = {};
proto.libra.dbapi = {};
proto.libra.dbapi.v1 = require('./db_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.libra.dbapi.v1.DBClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.libra.dbapi.v1.DBPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.dbapi.v1.RegisterSchemaRequest,
 *   !proto.libra.dbapi.v1.RegisterSchemaResponse>}
 */
const methodDescriptor_DB_RegisterSchema = new grpc.web.MethodDescriptor(
  '/libra.dbapi.v1.DB/RegisterSchema',
  grpc.web.MethodType.UNARY,
  proto.libra.dbapi.v1.RegisterSchemaRequest,
  proto.libra.dbapi.v1.RegisterSchemaResponse,
  /**
   * @param {!proto.libra.dbapi.v1.RegisterSchemaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.RegisterSchemaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.dbapi.v1.RegisterSchemaRequest,
 *   !proto.libra.dbapi.v1.RegisterSchemaResponse>}
 */
const methodInfo_DB_RegisterSchema = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.dbapi.v1.RegisterSchemaResponse,
  /**
   * @param {!proto.libra.dbapi.v1.RegisterSchemaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.RegisterSchemaResponse.deserializeBinary
);


/**
 * @param {!proto.libra.dbapi.v1.RegisterSchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.dbapi.v1.RegisterSchemaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.dbapi.v1.RegisterSchemaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.dbapi.v1.DBClient.prototype.registerSchema =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.dbapi.v1.DB/RegisterSchema',
      request,
      metadata || {},
      methodDescriptor_DB_RegisterSchema,
      callback);
};


/**
 * @param {!proto.libra.dbapi.v1.RegisterSchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.dbapi.v1.RegisterSchemaResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.dbapi.v1.DBPromiseClient.prototype.registerSchema =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.dbapi.v1.DB/RegisterSchema',
      request,
      metadata || {},
      methodDescriptor_DB_RegisterSchema);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.dbapi.v1.ArchiveGetRequest,
 *   !proto.libra.dbapi.v1.ArchiveGetResponse>}
 */
const methodDescriptor_DB_Lock = new grpc.web.MethodDescriptor(
  '/libra.dbapi.v1.DB/Lock',
  grpc.web.MethodType.UNARY,
  proto.libra.dbapi.v1.ArchiveGetRequest,
  proto.libra.dbapi.v1.ArchiveGetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveGetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.dbapi.v1.ArchiveGetRequest,
 *   !proto.libra.dbapi.v1.ArchiveGetResponse>}
 */
const methodInfo_DB_Lock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.dbapi.v1.ArchiveGetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveGetResponse.deserializeBinary
);


/**
 * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.dbapi.v1.ArchiveGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.dbapi.v1.ArchiveGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.dbapi.v1.DBClient.prototype.lock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.dbapi.v1.DB/Lock',
      request,
      metadata || {},
      methodDescriptor_DB_Lock,
      callback);
};


/**
 * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.dbapi.v1.ArchiveGetResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.dbapi.v1.DBPromiseClient.prototype.lock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.dbapi.v1.DB/Lock',
      request,
      metadata || {},
      methodDescriptor_DB_Lock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.dbapi.v1.ArchiveSetRequest,
 *   !proto.libra.dbapi.v1.ArchiveSetResponse>}
 */
const methodDescriptor_DB_Unlock = new grpc.web.MethodDescriptor(
  '/libra.dbapi.v1.DB/Unlock',
  grpc.web.MethodType.UNARY,
  proto.libra.dbapi.v1.ArchiveSetRequest,
  proto.libra.dbapi.v1.ArchiveSetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.dbapi.v1.ArchiveSetRequest,
 *   !proto.libra.dbapi.v1.ArchiveSetResponse>}
 */
const methodInfo_DB_Unlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.dbapi.v1.ArchiveSetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveSetResponse.deserializeBinary
);


/**
 * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.dbapi.v1.ArchiveSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.dbapi.v1.ArchiveSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.dbapi.v1.DBClient.prototype.unlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.dbapi.v1.DB/Unlock',
      request,
      metadata || {},
      methodDescriptor_DB_Unlock,
      callback);
};


/**
 * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.dbapi.v1.ArchiveSetResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.dbapi.v1.DBPromiseClient.prototype.unlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.dbapi.v1.DB/Unlock',
      request,
      metadata || {},
      methodDescriptor_DB_Unlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.dbapi.v1.ArchiveGetRequest,
 *   !proto.libra.dbapi.v1.ArchiveGetResponse>}
 */
const methodDescriptor_DB_GetArchive = new grpc.web.MethodDescriptor(
  '/libra.dbapi.v1.DB/GetArchive',
  grpc.web.MethodType.UNARY,
  proto.libra.dbapi.v1.ArchiveGetRequest,
  proto.libra.dbapi.v1.ArchiveGetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveGetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.dbapi.v1.ArchiveGetRequest,
 *   !proto.libra.dbapi.v1.ArchiveGetResponse>}
 */
const methodInfo_DB_GetArchive = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.dbapi.v1.ArchiveGetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveGetResponse.deserializeBinary
);


/**
 * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.dbapi.v1.ArchiveGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.dbapi.v1.ArchiveGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.dbapi.v1.DBClient.prototype.getArchive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.dbapi.v1.DB/GetArchive',
      request,
      metadata || {},
      methodDescriptor_DB_GetArchive,
      callback);
};


/**
 * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.dbapi.v1.ArchiveGetResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.dbapi.v1.DBPromiseClient.prototype.getArchive =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.dbapi.v1.DB/GetArchive',
      request,
      metadata || {},
      methodDescriptor_DB_GetArchive);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.dbapi.v1.ArchiveSetRequest,
 *   !proto.libra.dbapi.v1.ArchiveSetResponse>}
 */
const methodDescriptor_DB_SetArchive = new grpc.web.MethodDescriptor(
  '/libra.dbapi.v1.DB/SetArchive',
  grpc.web.MethodType.UNARY,
  proto.libra.dbapi.v1.ArchiveSetRequest,
  proto.libra.dbapi.v1.ArchiveSetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.dbapi.v1.ArchiveSetRequest,
 *   !proto.libra.dbapi.v1.ArchiveSetResponse>}
 */
const methodInfo_DB_SetArchive = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.dbapi.v1.ArchiveSetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveSetResponse.deserializeBinary
);


/**
 * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.dbapi.v1.ArchiveSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.dbapi.v1.ArchiveSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.dbapi.v1.DBClient.prototype.setArchive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.dbapi.v1.DB/SetArchive',
      request,
      metadata || {},
      methodDescriptor_DB_SetArchive,
      callback);
};


/**
 * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.dbapi.v1.ArchiveSetResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.dbapi.v1.DBPromiseClient.prototype.setArchive =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.dbapi.v1.DB/SetArchive',
      request,
      metadata || {},
      methodDescriptor_DB_SetArchive);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.dbapi.v1.ArchiveGetRequest,
 *   !proto.libra.dbapi.v1.ArchiveGetResponse>}
 */
const methodDescriptor_DB_GetModel = new grpc.web.MethodDescriptor(
  '/libra.dbapi.v1.DB/GetModel',
  grpc.web.MethodType.UNARY,
  proto.libra.dbapi.v1.ArchiveGetRequest,
  proto.libra.dbapi.v1.ArchiveGetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveGetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.dbapi.v1.ArchiveGetRequest,
 *   !proto.libra.dbapi.v1.ArchiveGetResponse>}
 */
const methodInfo_DB_GetModel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.dbapi.v1.ArchiveGetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveGetResponse.deserializeBinary
);


/**
 * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.dbapi.v1.ArchiveGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.dbapi.v1.ArchiveGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.dbapi.v1.DBClient.prototype.getModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.dbapi.v1.DB/GetModel',
      request,
      metadata || {},
      methodDescriptor_DB_GetModel,
      callback);
};


/**
 * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.dbapi.v1.ArchiveGetResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.dbapi.v1.DBPromiseClient.prototype.getModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.dbapi.v1.DB/GetModel',
      request,
      metadata || {},
      methodDescriptor_DB_GetModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.dbapi.v1.ArchiveSetRequest,
 *   !proto.libra.dbapi.v1.ArchiveSetResponse>}
 */
const methodDescriptor_DB_SetModel = new grpc.web.MethodDescriptor(
  '/libra.dbapi.v1.DB/SetModel',
  grpc.web.MethodType.UNARY,
  proto.libra.dbapi.v1.ArchiveSetRequest,
  proto.libra.dbapi.v1.ArchiveSetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.dbapi.v1.ArchiveSetRequest,
 *   !proto.libra.dbapi.v1.ArchiveSetResponse>}
 */
const methodInfo_DB_SetModel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.dbapi.v1.ArchiveSetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveSetResponse.deserializeBinary
);


/**
 * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.dbapi.v1.ArchiveSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.dbapi.v1.ArchiveSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.dbapi.v1.DBClient.prototype.setModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.dbapi.v1.DB/SetModel',
      request,
      metadata || {},
      methodDescriptor_DB_SetModel,
      callback);
};


/**
 * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.dbapi.v1.ArchiveSetResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.dbapi.v1.DBPromiseClient.prototype.setModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.dbapi.v1.DB/SetModel',
      request,
      metadata || {},
      methodDescriptor_DB_SetModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.dbapi.v1.ArchiveGetRequest,
 *   !proto.libra.dbapi.v1.ArchiveGetResponse>}
 */
const methodDescriptor_DB_GetMetadata = new grpc.web.MethodDescriptor(
  '/libra.dbapi.v1.DB/GetMetadata',
  grpc.web.MethodType.UNARY,
  proto.libra.dbapi.v1.ArchiveGetRequest,
  proto.libra.dbapi.v1.ArchiveGetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveGetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.dbapi.v1.ArchiveGetRequest,
 *   !proto.libra.dbapi.v1.ArchiveGetResponse>}
 */
const methodInfo_DB_GetMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.dbapi.v1.ArchiveGetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveGetResponse.deserializeBinary
);


/**
 * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.dbapi.v1.ArchiveGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.dbapi.v1.ArchiveGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.dbapi.v1.DBClient.prototype.getMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.dbapi.v1.DB/GetMetadata',
      request,
      metadata || {},
      methodDescriptor_DB_GetMetadata,
      callback);
};


/**
 * @param {!proto.libra.dbapi.v1.ArchiveGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.dbapi.v1.ArchiveGetResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.dbapi.v1.DBPromiseClient.prototype.getMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.dbapi.v1.DB/GetMetadata',
      request,
      metadata || {},
      methodDescriptor_DB_GetMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.dbapi.v1.ArchiveSetRequest,
 *   !proto.libra.dbapi.v1.ArchiveSetResponse>}
 */
const methodDescriptor_DB_SetMetadata = new grpc.web.MethodDescriptor(
  '/libra.dbapi.v1.DB/SetMetadata',
  grpc.web.MethodType.UNARY,
  proto.libra.dbapi.v1.ArchiveSetRequest,
  proto.libra.dbapi.v1.ArchiveSetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.dbapi.v1.ArchiveSetRequest,
 *   !proto.libra.dbapi.v1.ArchiveSetResponse>}
 */
const methodInfo_DB_SetMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.dbapi.v1.ArchiveSetResponse,
  /**
   * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.dbapi.v1.ArchiveSetResponse.deserializeBinary
);


/**
 * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.dbapi.v1.ArchiveSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.dbapi.v1.ArchiveSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.dbapi.v1.DBClient.prototype.setMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.dbapi.v1.DB/SetMetadata',
      request,
      metadata || {},
      methodDescriptor_DB_SetMetadata,
      callback);
};


/**
 * @param {!proto.libra.dbapi.v1.ArchiveSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.dbapi.v1.ArchiveSetResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.dbapi.v1.DBPromiseClient.prototype.setMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.dbapi.v1.DB/SetMetadata',
      request,
      metadata || {},
      methodDescriptor_DB_SetMetadata);
};


module.exports = proto.libra.dbapi.v1;

