/**
 * The type of event that was triggered.
 * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#request-event-fields-config
 */
export type EdgeEventType =
  | 'viewer-request'
  | 'origin-request'
  | 'viewer-response'
  | 'origin-response'
