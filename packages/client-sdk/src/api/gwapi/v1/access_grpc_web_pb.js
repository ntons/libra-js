/**
 * @fileoverview gRPC-Web generated client stub for libra.gwapi.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
const proto = {};
proto.libra = {};
proto.libra.gwapi = {};
proto.libra.gwapi.v1 = require('./access_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.libra.gwapi.v1.AccessClient =
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
proto.libra.gwapi.v1.AccessPromiseClient =
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
 *   !proto.libra.gwapi.v1.SignInRequest,
 *   !proto.google.protobuf.Any>}
 */
const methodDescriptor_Access_SignIn = new grpc.web.MethodDescriptor(
  '/libra.gwapi.v1.Access/SignIn',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.libra.gwapi.v1.SignInRequest,
  google_protobuf_any_pb.Any,
  /**
   * @param {!proto.libra.gwapi.v1.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_any_pb.Any.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.gwapi.v1.SignInRequest,
 *   !proto.google.protobuf.Any>}
 */
const methodInfo_Access_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_any_pb.Any,
  /**
   * @param {!proto.libra.gwapi.v1.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_any_pb.Any.deserializeBinary
);


/**
 * @param {!proto.libra.gwapi.v1.SignInRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Any>}
 *     The XHR Node Readable Stream
 */
proto.libra.gwapi.v1.AccessClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/libra.gwapi.v1.Access/SignIn',
      request,
      metadata || {},
      methodDescriptor_Access_SignIn);
};


/**
 * @param {!proto.libra.gwapi.v1.SignInRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Any>}
 *     The XHR Node Readable Stream
 */
proto.libra.gwapi.v1.AccessPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/libra.gwapi.v1.Access/SignIn',
      request,
      metadata || {},
      methodDescriptor_Access_SignIn);
};


module.exports = proto.libra.gwapi.v1;

