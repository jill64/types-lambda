import { CfConfig } from './field/CfConfig.js'
import { EdgeIncludeBodyOption } from './field/EdgeIncludeBodyOption.js'
import { EdgeOriginType } from './field/EdgeOriginType.js'
import { EdgeRequest } from './field/EdgeRequest.js'
import { OriginRequest } from './field/OriginRequest.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#example-origin-request
 */
export type OriginRequestEvent<
  Origin extends EdgeOriginType,
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = {
  Records: [
    {
      cf: {
        config: CfConfig<'origin-request'>
        request: EdgeRequest<IncludeBody> & {
          origin: Origin extends 'custom'
            ? {
                custom: OriginRequest<'custom'>
              }
            : {
                s3: OriginRequest<'s3'>
              }
        }
      }
    }
  ]
}
