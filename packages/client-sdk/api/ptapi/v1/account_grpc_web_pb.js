/**
 * @fileoverview gRPC-Web generated client stub for libra.ptapi.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
const proto = {};
proto.libra = {};
proto.libra.ptapi = {};
proto.libra.ptapi.v1 = require('./account_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.libra.ptapi.v1.AccountClient =
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
proto.libra.ptapi.v1.AccountPromiseClient =
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
 *   !proto.libra.ptapi.v1.LoginRequest,
 *   !proto.libra.ptapi.v1.LoginResponse>}
 */
const methodDescriptor_Account_Login = new grpc.web.MethodDescriptor(
  '/libra.ptapi.v1.Account/Login',
  grpc.web.MethodType.UNARY,
  proto.libra.ptapi.v1.LoginRequest,
  proto.libra.ptapi.v1.LoginResponse,
  /**
   * @param {!proto.libra.ptapi.v1.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.ptapi.v1.LoginRequest,
 *   !proto.libra.ptapi.v1.LoginResponse>}
 */
const methodInfo_Account_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.ptapi.v1.LoginResponse,
  /**
   * @param {!proto.libra.ptapi.v1.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.libra.ptapi.v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.ptapi.v1.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.ptapi.v1.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.ptapi.v1.AccountClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.ptapi.v1.Account/Login',
      request,
      metadata || {},
      methodDescriptor_Account_Login,
      callback);
};


/**
 * @param {!proto.libra.ptapi.v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.ptapi.v1.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.ptapi.v1.AccountPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.ptapi.v1.Account/Login',
      request,
      metadata || {},
      methodDescriptor_Account_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.ptapi.v1.ListRolesRequest,
 *   !proto.libra.ptapi.v1.ListRolesResponse>}
 */
const methodDescriptor_Account_ListRoles = new grpc.web.MethodDescriptor(
  '/libra.ptapi.v1.Account/ListRoles',
  grpc.web.MethodType.UNARY,
  proto.libra.ptapi.v1.ListRolesRequest,
  proto.libra.ptapi.v1.ListRolesResponse,
  /**
   * @param {!proto.libra.ptapi.v1.ListRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.ListRolesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.ptapi.v1.ListRolesRequest,
 *   !proto.libra.ptapi.v1.ListRolesResponse>}
 */
const methodInfo_Account_ListRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.ptapi.v1.ListRolesResponse,
  /**
   * @param {!proto.libra.ptapi.v1.ListRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.ListRolesResponse.deserializeBinary
);


/**
 * @param {!proto.libra.ptapi.v1.ListRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.ptapi.v1.ListRolesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.ptapi.v1.ListRolesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.ptapi.v1.AccountClient.prototype.listRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.ptapi.v1.Account/ListRoles',
      request,
      metadata || {},
      methodDescriptor_Account_ListRoles,
      callback);
};


/**
 * @param {!proto.libra.ptapi.v1.ListRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.ptapi.v1.ListRolesResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.ptapi.v1.AccountPromiseClient.prototype.listRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.ptapi.v1.Account/ListRoles',
      request,
      metadata || {},
      methodDescriptor_Account_ListRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.ptapi.v1.CreateRoleRequest,
 *   !proto.libra.ptapi.v1.CreateRoleResponse>}
 */
const methodDescriptor_Account_CreateRole = new grpc.web.MethodDescriptor(
  '/libra.ptapi.v1.Account/CreateRole',
  grpc.web.MethodType.UNARY,
  proto.libra.ptapi.v1.CreateRoleRequest,
  proto.libra.ptapi.v1.CreateRoleResponse,
  /**
   * @param {!proto.libra.ptapi.v1.CreateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.CreateRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.ptapi.v1.CreateRoleRequest,
 *   !proto.libra.ptapi.v1.CreateRoleResponse>}
 */
const methodInfo_Account_CreateRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.ptapi.v1.CreateRoleResponse,
  /**
   * @param {!proto.libra.ptapi.v1.CreateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.CreateRoleResponse.deserializeBinary
);


/**
 * @param {!proto.libra.ptapi.v1.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.ptapi.v1.CreateRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.ptapi.v1.CreateRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.ptapi.v1.AccountClient.prototype.createRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.ptapi.v1.Account/CreateRole',
      request,
      metadata || {},
      methodDescriptor_Account_CreateRole,
      callback);
};


/**
 * @param {!proto.libra.ptapi.v1.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.ptapi.v1.CreateRoleResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.ptapi.v1.AccountPromiseClient.prototype.createRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.ptapi.v1.Account/CreateRole',
      request,
      metadata || {},
      methodDescriptor_Account_CreateRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.ptapi.v1.SignInRequest,
 *   !proto.libra.ptapi.v1.SignInResponse>}
 */
const methodDescriptor_Account_SignIn = new grpc.web.MethodDescriptor(
  '/libra.ptapi.v1.Account/SignIn',
  grpc.web.MethodType.UNARY,
  proto.libra.ptapi.v1.SignInRequest,
  proto.libra.ptapi.v1.SignInResponse,
  /**
   * @param {!proto.libra.ptapi.v1.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.SignInResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.ptapi.v1.SignInRequest,
 *   !proto.libra.ptapi.v1.SignInResponse>}
 */
const methodInfo_Account_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.ptapi.v1.SignInResponse,
  /**
   * @param {!proto.libra.ptapi.v1.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.SignInResponse.deserializeBinary
);


/**
 * @param {!proto.libra.ptapi.v1.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.ptapi.v1.SignInResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.ptapi.v1.SignInResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.ptapi.v1.AccountClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.ptapi.v1.Account/SignIn',
      request,
      metadata || {},
      methodDescriptor_Account_SignIn,
      callback);
};


/**
 * @param {!proto.libra.ptapi.v1.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.ptapi.v1.SignInResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.ptapi.v1.AccountPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.ptapi.v1.Account/SignIn',
      request,
      metadata || {},
      methodDescriptor_Account_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.ptapi.v1.SetUserMetadataRequest,
 *   !proto.libra.ptapi.v1.SetUserMetadataResponse>}
 */
const methodDescriptor_Account_SetUserMetadata = new grpc.web.MethodDescriptor(
  '/libra.ptapi.v1.Account/SetUserMetadata',
  grpc.web.MethodType.UNARY,
  proto.libra.ptapi.v1.SetUserMetadataRequest,
  proto.libra.ptapi.v1.SetUserMetadataResponse,
  /**
   * @param {!proto.libra.ptapi.v1.SetUserMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.SetUserMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.ptapi.v1.SetUserMetadataRequest,
 *   !proto.libra.ptapi.v1.SetUserMetadataResponse>}
 */
const methodInfo_Account_SetUserMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.ptapi.v1.SetUserMetadataResponse,
  /**
   * @param {!proto.libra.ptapi.v1.SetUserMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.SetUserMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.libra.ptapi.v1.SetUserMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.ptapi.v1.SetUserMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.ptapi.v1.SetUserMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.ptapi.v1.AccountClient.prototype.setUserMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.ptapi.v1.Account/SetUserMetadata',
      request,
      metadata || {},
      methodDescriptor_Account_SetUserMetadata,
      callback);
};


/**
 * @param {!proto.libra.ptapi.v1.SetUserMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.ptapi.v1.SetUserMetadataResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.ptapi.v1.AccountPromiseClient.prototype.setUserMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.ptapi.v1.Account/SetUserMetadata',
      request,
      metadata || {},
      methodDescriptor_Account_SetUserMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.ptapi.v1.SetRoleMetadataRequest,
 *   !proto.libra.ptapi.v1.SetRoleMetadataResponse>}
 */
const methodDescriptor_Account_SetRoleMetadata = new grpc.web.MethodDescriptor(
  '/libra.ptapi.v1.Account/SetRoleMetadata',
  grpc.web.MethodType.UNARY,
  proto.libra.ptapi.v1.SetRoleMetadataRequest,
  proto.libra.ptapi.v1.SetRoleMetadataResponse,
  /**
   * @param {!proto.libra.ptapi.v1.SetRoleMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.SetRoleMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.ptapi.v1.SetRoleMetadataRequest,
 *   !proto.libra.ptapi.v1.SetRoleMetadataResponse>}
 */
const methodInfo_Account_SetRoleMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.ptapi.v1.SetRoleMetadataResponse,
  /**
   * @param {!proto.libra.ptapi.v1.SetRoleMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.ptapi.v1.SetRoleMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.libra.ptapi.v1.SetRoleMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.ptapi.v1.SetRoleMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.ptapi.v1.SetRoleMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.ptapi.v1.AccountClient.prototype.setRoleMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.ptapi.v1.Account/SetRoleMetadata',
      request,
      metadata || {},
      methodDescriptor_Account_SetRoleMetadata,
      callback);
};


/**
 * @param {!proto.libra.ptapi.v1.SetRoleMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.ptapi.v1.SetRoleMetadataResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.ptapi.v1.AccountPromiseClient.prototype.setRoleMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.ptapi.v1.Account/SetRoleMetadata',
      request,
      metadata || {},
      methodDescriptor_Account_SetRoleMetadata);
};


module.exports = proto.libra.ptapi.v1;

