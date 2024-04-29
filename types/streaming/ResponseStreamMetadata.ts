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
  /**
   * HTTP cookies
   * @example ["cookie1=value1", "cookie2=value2"]
   */
  cookies: string[]
}
