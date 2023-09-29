export type ResponseStreamMetadata = {
  /**
   * HTTP status code
   * @example 200
   */
  statusCode: number
  /**
   * HTTP headers
   * @example
   * ```js
   * {
   *   "Content-Type": "application/json",
   *   "CustomHeader": "outerspace"
   * }
   * ```
   */
  headers: Record<string, string>
}
