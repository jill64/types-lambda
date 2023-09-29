import { CfConfig } from '../field/CfConfig.js'
import { EdgeIncludeBodyOption } from '../field/EdgeIncludeBodyOption.js'
import { EdgeRequest } from '../field/EdgeRequest.js'
import { OriginResponse } from '../field/OriginResponse.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#lambda-event-structure-response-viewer
 */
export type ViewerResponseEvent<
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = {
  Records: [
    {
      cf: {
        config: CfConfig<'viewer-response'>
        request: EdgeRequest<IncludeBody>
        response: OriginResponse
      }
    }
  ]
}
