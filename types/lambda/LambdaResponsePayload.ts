import type { Json } from '../field/Json.js'

/**
 * API Gateway makes the following assumptions if your Lambda function returns valid JSON and doesn't return a statusCode:
 * - isBase64Encoded is false.
 * - statusCode is 200.
 * - content-type is application/json.
 * - body is the function's response.
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.response
 */
export type LambdaResponsePayload =
  | {
      /**
       * HTTP status code
       * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.response
       */
      statusCode: number
      /**
       * HTTP headers
       * @example
       * ```js
       * {
       *   'Content-Type': 'application/json'
       *   'My-Custom-Header': 'Custom Value'
       * }
       * ```
       */
      headers?: Record<string, string>
      /**
       * The response body
       * @example '{ "message": "Hello, world!" }'
       */
      body?: string
      /**
       * HTTP cookies
       * @example
       * ```js
       * [
       *   'Cookie_1=Value1; Expires=21 Oct 2021 07:48 GMT',
       *   'Cookie_2=Value2; Max-Age=78000'
       * ]
       * ```
       */
      cookies?: string[]
      /**
       * Whether the body is base64 encoded
       */
      isBase64Encoded?: boolean
    }
  | string
  | Json
