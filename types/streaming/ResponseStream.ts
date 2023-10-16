import { WritableStream } from 'node:stream/web'

/**
 * A writable stream that can be used to emit chunks of a response.
 * @see https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html#config-rs-write-functions-handler
 */
export type ResponseStream = WritableStream & {
  /**
   * Emit a chunk of the stream.
   */
  write: (chunk: Buffer | Uint8Array | string | null) => void
  /**
   * Terminate the stream.
   */
  end: () => void
  /**
   * Returns a promise that resolves when the stream has finished closing.
   */
  finished: () => Promise<void>
  /**
   * Sets the Content-Type header of the response.
   * @example
   * ```js
   * export const handler = awslambda.streamifyResponse(
   *    async (event, responseStream, context) => {
   *        responseStream.setContentType(“text/plain”);
   *        responseStream.write(“Hello, world!”);
   *        responseStream.end();
   *    }
   * );
   * ```
   * @see https://aws.amazon.com/blogs/compute/introducing-aws-lambda-response-streaming/
   */
  setContentType: (contentType: string) => void
}
