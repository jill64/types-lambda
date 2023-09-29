import { OriginRequestEvent } from './OriginRequestEvent.js'
import { CfConfig } from './field/CfConfig.js'
import { EdgeIncludeBodyOption } from './field/EdgeIncludeBodyOption.js'
import { EdgeOriginType } from './field/EdgeOriginType.js'
import { OriginResponse } from './field/OriginResponse.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#lambda-event-structure-response-origin
 */
export type OriginResponseEvent<
  Origin extends EdgeOriginType,
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = {
  Records: [
    {
      cf: {
        config: CfConfig<'origin-response'>
        request: OriginRequestEvent<
          Origin,
          IncludeBody
        >['Records'][0]['cf']['request']
        response: OriginResponse
      }
    }
  ]
}
