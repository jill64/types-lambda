import { LambdaRequestContext } from '../lambda/LambdaRequestContext.js'
import { LambdaRequestPayload } from '../lambda/LambdaRequestPayload.js'
import { ResponseStream } from './ResponseStream.js'
import { ResponseStreamMetadata } from './ResponseStreamMetadata.js'

export declare const awslambda: {
  /**
   * Creates a response stream from a handler function.
   * @example
   * ```js
   * export const handler = awslambda.streamifyResponse(
   *   async (event, responseStream) => {
   *    responseStream.write("Streaming with Helper \n");
   *    responseStream.write("Hello 0 \n");
   *    responseStream.write("Hello 1 \n");
   *    responseStream.write("Hello 2 \n");
   *    responseStream.end();
   *    await responseStream.finished();
   *  }
   *);
   * ```
   * @see https://docs.aws.amazon.com/lambda/latest/dg/response-streaming-tutorial.html#response-streaming-tutorial-create-function-cfn
   */
  streamifyResponse: (
    handler: (
      event: LambdaRequestPayload,
      responseStream: ResponseStream,
      _context: LambdaRequestContext
    ) => Promise<void> | void
  ) => void
  /**
   * Sets the http status code and headers of the response.
   * ```js
   * async (event, responseStream) => {
   *  const metadata = {
   *    statusCode: 200,
   *    headers: {
   *      "Content-Type": "application/json",
   *      "CustomHeader": "outerspace"
   *    }
   *  };
   *
   *  // Assign to the responseStream parameter to prevent accidental reuse of the non-wrapped stream.
   *  responseStream = awslambda.HttpResponseStream.from(responseStream, metadata);
   *
   *  responseStream.write("Streaming with Helper \n");
   *
   *  // ...
   *}
   * ```
   * @see https://docs.aws.amazon.com/lambda/latest/dg/response-streaming-tutorial.html#response-streaming-tutorial-create-function-cfn
   */
  HttpResponseStream: {
    from: (
      responseStream: ResponseStream,
      metadata: ResponseStreamMetadata
    ) => ResponseStream
  }
}
