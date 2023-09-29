import { CfConfig } from './field/CfConfig.js'
import { EdgeRequest } from './field/EdgeRequest.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#example-viewer-request
 */
export type ViewerRequestEvent<
  T extends 'include-body' | undefined = undefined
> = {
  Records: [
    {
      cf: {
        config: CfConfig<'viewer-request'>
        request: EdgeRequest<T>
      }
    }
  ]
}
