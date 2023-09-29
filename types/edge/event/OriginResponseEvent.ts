import { CfConfig } from '../field/CfConfig.js'
import { EdgeIncludeBodyOption } from '../field/EdgeIncludeBodyOption.js'
import { OriginResponse } from '../field/OriginResponse.js'
import { OriginType } from '../field/OriginType.js'
import { OriginRequestEvent } from './OriginRequestEvent.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#lambda-event-structure-response-origin
 */
export type OriginResponseEvent<
  Origin extends OriginType,
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
