import { LambdaResponsePayload } from './LambdaResponsePayload.js'

/**
 * ```js
 * const https = require("https");
 * let url = "https://aws.amazon.com/";
 *
 * export const handler = (event, context, callback) => {
 *   https.get(url, (res) => {
 *       callback(null, res.statusCode);
 *     }).on("error", (e) => {
 *       callback(Error(e));
 *     });
 * };
 * ```
 * @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-handler-callback
 */
export type LambdaResponseCallback<T = LambdaResponsePayload> = (
  error: Error | null,
  result?: T
) => void
