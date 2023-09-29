import { EdgeRequestBody } from './EdgeRequestBody.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#request-event-fields-request
 */
export type EdgeRequest<T extends 'include-body' | undefined = undefined> = {
  /**
   *
   * The IP address of the viewer that made the request.
   * If the viewer used an HTTP proxy or a load balancer to send the request, the value is the IP address of the proxy or load balancer.
   * @example  '203.0.113.178'
   */
  readonly clientIp: string
  /**
   * The headers in the request. Note the following:
   * - The keys in the `headers` object are lowercase versions of standard HTTP header names.
   * - Using lowercase keys gives you case-insensitive access to the header values.
   * - Each header object (for example, `headers["accept"]` or `headers["host"]`) is an array of key–value pairs.
   * For a given header, the array contains one key–value pair for each value in the request.
   * - `key` contains the case-sensitive name of the header as it appeared in the HTTP request;
   * for example, `Host`, `User-Agent`, `X-Forwarded-For`, and so on.
   * - `value` contains the header value as it appeared in the HTTP request.
   * - When your Lambda function adds or modifies request headers and you don't include the header key field, `Lambda@Edge` automatically inserts a header key using the header name that you provide.
   * Regardless of how you've formatted the header name, the header key that's inserted automatically is formatted with initial capitalization for each part, separated by hyphens (-).
   * For example, you can add a header like the following, without a header key:
   * ```js
   * "user-agent": [
   *  {
   *    "value": "ExampleCustomUserAgent/1.X.0"
   *  }
   * ]
   * ```
   * In this example, `Lambda@Edge` automatically inserts `"key": "User-Agent"`.
   * For information about restrictions on header usage, see [Restrictions on edge functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-restrictions.html).
   * @example
   * ```js
   * {
   *   host: [
   *     {
   *       key: 'Host'
   *       value: 'd111111abcdef8.cloudfront.net'
   *     }
   *   ]
   *   'user-agent': [
   *     {
   *       key: 'User-Agent'
   *       value: 'curl/7.66.0'
   *     }
   *   ]
   *   accept: [
   *     {
   *       key: 'accept'
   *       value: 'image/*'
   *     }
   *   ]
   * }
   * ```
   */
  headers: Record<
    string,
    {
      key: string
      value: string
    }[]
  >
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
} & (T extends 'include-body' ? { body: EdgeRequestBody } : never)
