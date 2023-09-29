/**
 * @see https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html#urls-request-payload
 */
export type LambdaRequestPayload = {
  /**
   * The payload format version for this event. Lambda function URLs currently support payload format version 2.0.
   */
  version: '2.0'
  /**
   * Function URLs don't use this parameter.
   * Lambda sets this to $default as a placeholder.
   */
  routeKey: '$default'
  /**
   * The request path. For example, if the request URL is `https://{url-id}.lambda-url.{region}.on.aws/example/test/demo`, then the raw path value is `/example/test/demo`.
   * @example '/my/path'
   */
  rawPath: string
  /**
   * The raw string containing the request's query string parameters.
   * @example "?parameter1=value1&parameter2=value2"
   */
  rawQueryString: string
  /**
   * An array containing all cookies sent as part of the request.
   * @example ['cookie1', 'cookie2']
   */
  cookies: string[]
  /**
   * The list of request headers, presented as key-value pairs.
   * Header names are lowercased.
   * This headers doesn't have multiValueHeaders or multiValueQueryStringParameters fields.
   * Duplicate headers are combined with commas and included in the headers field.
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.proxy-format
   */
  headers: Record<string, string>
  /**
   * The query parameters for the request.
   * For example, if the request URL is `https://{url-id}.lambda-url.{region}.on.aws/example?name=Jane`, then the queryStringParameters value is a JSON object with a key of name and a value of Jane.
   * @example
   * {
   *   "name": "Jane"
   * }
   */
  queryStringParameters: Record<string, string>
  /**
   * An object that contains additional information about the request, such as the requestId, the time of the request, and the identity of the caller if authorized via AWS Identity and Access Management (IAM).
   */
  requestContext: {
    /**
     * The AWS account ID of the function owner.
     * @example '123456789012'
     */
    accountId: string
    /**
     * The ID of the function URL.
     * @example "33anwqw8fj"
     */
    apiId: string
    /**
     * Function URLs don't use this parameter. Lambda sets this to null.
     */
    authentication: null
    /**
     * An object that contains information about the caller identity, if the function URL uses the AWS_IAM auth type.
     * Otherwise, Lambda sets this to null.
     */
    authorizer: {
      iam: {
        /**
         * The access key of the caller identity.
         * @example "AKIAIOSFODNN7EXAMPLE"
         */
        accessKey: string
        /**
         * The AWS account ID of the caller identity.
         * @example "111122223333"
         */
        accountId: string
        /**
         * The ID (user ID) of the caller.
         * @example "AIDACKCEVSQ6C2EXAMPLE"
         */
        callerId: string
        /**
         * Function URLs don't use this parameter.
         * Lambda sets this to null or excludes this from the JSON.
         */
        cognitoIdentity?: null
        /**
         * The principal org ID associated with the caller identity.
         * @example "AIDACKCEVSQORGEXAMPLE"
         */
        principalOrgId: string | null
        /**
         * The user Amazon Resource Name (ARN) of the caller identity.
         * @example "arn:aws:iam::111122223333:user/example-user"
         */
        userArn: string
        /**
         * The user ID of the caller identity.
         * @example "AIDACKCEVSQ6C2EXAMPLE"
         */
        userId: string
      }
    }
    /**
     * The domain name of the function URL.
     * @example "<url-id>.lambda-url.us-west-2.on.aws"
     */
    domainName: string
    /**
     * The domain prefix of the function URL.
     * @example "<url-id>"
     */
    domainPrefix: string
    /**
     * An object that contains details about the HTTP request.
     */
    http: {
      /**
       * The HTTP method used in this request.
       * Valid values include GET, POST, PUT, HEAD, OPTIONS, PATCH, and DELETE.
       */
      method: 'GET' | 'POST' | 'PUT' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'DELETE'
      /**
       * The request path.
       * For example, if the request URL is `https://{url-id}.lambda-url.{region}.on.aws/example/test/demo`, then the path value is `/example/test/demo`.
       * @example '/example/test/demo'
       */
      path: string
      /**
       * The protocol of the request.
       * @example 'HTTP/1.1'
       */
      protocol: string
      /**
       * The source IP address of the immediate TCP connection making the request.
       * @example '123.123.123.123'
       */
      sourceIp: string
      /**
       * The User-Agent request header value.
       * @example 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Gecko/20100101 Firefox/42.0'
       */
      userAgent: string
    }
    /**
     * The ID of the invocation request.
     * You can use this ID to trace invocation logs related to your function.
     * @example 'e1506fd5-9e7b-434f-bd42-4f8fa224b599'
     */
    requestId: string
    /**
     * Function URLs don't use this parameter.
     * Lambda sets this to $default as a placeholder.
     */
    routeKey: '$default'
    /**
     * Function URLs don't use this parameter.
     * Lambda sets this to $default as a placeholder.
     */
    stage: '$default'
    /**
     * The timestamp of the request.
     * @example "07/Sep/2021:22:50:22 +0000"
     */
    time: string
    /**
     * The timestamp of the request, in Unix epoch time.
     * @example 1631055022677
     */
    timeEpoch: number
  }
  /**
   * The body of the request.
   * If the content type of the request is binary, the body is base64-encoded.
   */
  body: string
  /**
   * Function URLs don't use this parameter.
   * Lambda sets this to null or excludes this from the JSON.
   */
  pathParameters?: null
  /**
   * `true` if the body is a binary payload and base64-encoded.
   * `false` otherwise.
   */
  isBase64Encoded: boolean
  /**
   * Function URLs don't use this parameter.
   * Lambda sets this to null or excludes this from the JSON.
   */
  stageVariables?: null
}
