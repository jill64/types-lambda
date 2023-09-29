import { EdgeHeaders } from './EdgeHeaders.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#response-event-fields-response
 */
export type OriginResponse = {
  /**
   * The headers in the response.
   */
  headers: EdgeHeaders
  /**
   * The HTTP status code of the response.
   * The status code must be a in the range of 200 to 599.
   * @example '200'
   */
  status: string
  /**
   * The HTTP status description of the response.
   * @example 'OK'
   */
  statusDescription: string
}
