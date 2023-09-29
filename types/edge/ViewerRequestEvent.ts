import { CfConfig } from './field/CfConfig.js'
import { EdgeIncludeBodyOption } from './field/EdgeIncludeBodyOption.js'
import { EdgeRequest } from './field/EdgeRequest.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#example-viewer-request
 */
export type ViewerRequestEvent<
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = {
  Records: [
    {
      cf: {
        config: CfConfig<'viewer-request'>
        request: EdgeRequest<IncludeBody>
      }
    }
  ]
}
