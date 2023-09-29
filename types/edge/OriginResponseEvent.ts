import { OriginRequestEvent } from './OriginRequestEvent.js'
import { EdgeIncludeBodyOption } from './field/EdgeIncludeBodyOption.js'
import { EdgeOriginType } from './field/EdgeOriginType.js'
import { OriginResponse } from './field/OriginResponse.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#lambda-event-structure-response-origin
 */
export type OriginResponseEvent<
  Origin extends EdgeOriginType,
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = OriginRequestEvent<Origin, IncludeBody> & {
  Records: [
    {
      cf: {
        response: OriginResponse
      }
    }
  ]
}
