import { EdgeHeaders } from './EdgeHeaders.js'
import { EdgeIncludeBodyOption } from './EdgeIncludeBodyOption.js'
import { EdgeRequestBody } from './EdgeRequestBody.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#request-event-fields-request
 */
export type EdgeRequest<T extends EdgeIncludeBodyOption = undefined> = {
  /**
   *
   * The IP address of the viewer that made the request.
   * If the viewer used an HTTP proxy or a load balancer to send the request, the value is the IP address of the proxy or load balancer.
   * @example  '203.0.113.178'
   */
  readonly clientIp: string
  /**
   * The headers in the request.
   */
  headers: EdgeHeaders
  /**
   * The HTTP method of the request.
   */
  readonly method: string
  /**
   * The query string, if any, in the request.
   * If the request doesn't include a query string, the event object still includes querystring with an empty value.
   * For more information about query strings, see [Caching content based on query string parameters](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html).
   */
  querystring: string
  /**
   * The relative path of the requested object.
   * If your Lambda function modifies the uri value, note the following:
   * - The new uri value must begin with a forward slash (/).
   * - When a function changes the uri value, that changes the object that the viewer is requesting.
   * - When a function changes the uri value, that doesn't change the cache behavior for the request or the origin that the request is sent to.
   */
  uri: '/'
} & (T extends 'include-body'
  ? {
      /**
       * The body of the HTTP request.
       * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html
       */
      body?: EdgeRequestBody
    }
  : never)
