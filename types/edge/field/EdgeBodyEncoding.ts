/**
 * The encoding for the body.
 * When `Lambda@Edge` exposes the body to the Lambda function, it first converts the body to base64-encoding.
 * If you choose replace for the action to replace the body, you can opt to use base64 (the default) or text encoding.
 * If you specify encoding as base64 but the body is not valid base64, CloudFront returns an error.
 */
export type EdgeBodyEncoding = 'text' | 'base64'
