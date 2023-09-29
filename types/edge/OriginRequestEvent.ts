import { CfConfig } from './field/CfConfig.js'
import { EdgeRequest } from './field/EdgeRequest.js'
import { OriginRequest } from './field/OriginRequest.js'
import { OriginType } from './field/OriginType.js'

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#example-origin-request
 */
export type OriginRequestEvent<
  Origin extends OriginType,
  T extends 'include-body' | undefined = undefined
> = {
  Records: [
    {
      cf: {
        config: CfConfig<'origin-request'>
        request: EdgeRequest<T> & {
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
