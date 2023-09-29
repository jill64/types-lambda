/**
 * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#request-event-fields-config
 */
export type CfConfig<EventType extends 'viewer-request' | 'origin-request'> = {
  /**
   * The domain name of the distribution that's associated with the request.
   * @example "d111111abcdef8.cloudfront.net"
   */
  readonly distributionDomainName: string
  /**
   * The ID of the distribution that's associated with the request.
   * @example "EDFDVBD6EXAMPLE"
   */
  readonly distributionId: string
  /**
   * The type of event that was triggered.
   */
  readonly eventType: EventType
  /**
   * An encrypted string that uniquely identifies a viewer-to-CloudFront request.
   * The requestId value also appears in CloudFront access logs as x-edge-request-id.
   */
  readonly requestId: string
}
