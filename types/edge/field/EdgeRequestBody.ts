import { EdgeBodyEncoding } from './EdgeBodyEncoding.js'

/**
 * The body of the HTTP request.
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#request-event-fields-request
 */
export type EdgeRequestBody = {
  body: {
    /**
     * A Boolean flag that indicates whether the body was truncated by Lambda@Edge.
     * For more information, see [Restrictions on the request body with the include body option](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-restrictions.html#lambda-at-edge-restrictions-request-body).
     */
    readonly inputTruncated: boolean
    /**
     * The action that you intend to take with the body.
     * The options for action are the following:
     * - `read-only:` This is the default.
     * When returning the response from the Lambda function,
     * if action is read-only, `Lambda@Edge` ignores any changes to encoding or data.
     * - `replace:` Specify this when you want to replace the body sent to the origin.
     * @default 'read-only'
     */
    action: 'read-only' | 'replace'
    encoding: EdgeBodyEncoding
    /**
     * The request body content.
     */
    data: string
  }
}
