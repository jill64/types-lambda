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
export type EdgeHeaders = Record<
  string,
  {
    key: string
    value: string
  }[]
>
