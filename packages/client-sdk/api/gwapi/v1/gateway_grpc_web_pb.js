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
proto.libra.gwapi.v1 = require('./gateway_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.libra.gwapi.v1.GatewayClient =
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
proto.libra.gwapi.v1.GatewayPromiseClient =
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
 *   !proto.libra.gwapi.v1.PushRequest,
 *   !proto.libra.gwapi.v1.PushResponse>}
 */
const methodDescriptor_Gateway_Push = new grpc.web.MethodDescriptor(
  '/libra.gwapi.v1.Gateway/Push',
  grpc.web.MethodType.UNARY,
  proto.libra.gwapi.v1.PushRequest,
  proto.libra.gwapi.v1.PushResponse,
  /**
   * @param {!proto.libra.gwapi.v1.PushRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.gwapi.v1.PushResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.gwapi.v1.PushRequest,
 *   !proto.libra.gwapi.v1.PushResponse>}
 */
const methodInfo_Gateway_Push = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.gwapi.v1.PushResponse,
  /**
   * @param {!proto.libra.gwapi.v1.PushRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.gwapi.v1.PushResponse.deserializeBinary
);


/**
 * @param {!proto.libra.gwapi.v1.PushRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.gwapi.v1.PushResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.gwapi.v1.PushResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.gwapi.v1.GatewayClient.prototype.push =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.gwapi.v1.Gateway/Push',
      request,
      metadata || {},
      methodDescriptor_Gateway_Push,
      callback);
};


/**
 * @param {!proto.libra.gwapi.v1.PushRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.gwapi.v1.PushResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.gwapi.v1.GatewayPromiseClient.prototype.push =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.gwapi.v1.Gateway/Push',
      request,
      metadata || {},
      methodDescriptor_Gateway_Push);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.libra.gwapi.v1.SubscribeRequest,
 *   !proto.libra.gwapi.v1.SubscribeResponse>}
 */
const methodDescriptor_Gateway_Subscribe = new grpc.web.MethodDescriptor(
  '/libra.gwapi.v1.Gateway/Subscribe',
  grpc.web.MethodType.UNARY,
  proto.libra.gwapi.v1.SubscribeRequest,
  proto.libra.gwapi.v1.SubscribeResponse,
  /**
   * @param {!proto.libra.gwapi.v1.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.gwapi.v1.SubscribeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.libra.gwapi.v1.SubscribeRequest,
 *   !proto.libra.gwapi.v1.SubscribeResponse>}
 */
const methodInfo_Gateway_Subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.libra.gwapi.v1.SubscribeResponse,
  /**
   * @param {!proto.libra.gwapi.v1.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.libra.gwapi.v1.SubscribeResponse.deserializeBinary
);


/**
 * @param {!proto.libra.gwapi.v1.SubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.libra.gwapi.v1.SubscribeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.libra.gwapi.v1.SubscribeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.libra.gwapi.v1.GatewayClient.prototype.subscribe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/libra.gwapi.v1.Gateway/Subscribe',
      request,
      metadata || {},
      methodDescriptor_Gateway_Subscribe,
      callback);
};


/**
 * @param {!proto.libra.gwapi.v1.SubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.libra.gwapi.v1.SubscribeResponse>}
 *     A native promise that resolves to the response
 */
proto.libra.gwapi.v1.GatewayPromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/libra.gwapi.v1.Gateway/Subscribe',
      request,
      metadata || {},
      methodDescriptor_Gateway_Subscribe);
};


module.exports = proto.libra.gwapi.v1;

