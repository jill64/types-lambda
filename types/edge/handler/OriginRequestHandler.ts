import { LambdaRequestContext } from '../../lambda/LambdaRequestContext.js'
import { LambdaResponseCallback } from '../../lambda/LambdaResponseCallback.js'
import { OriginRequestEvent } from '../event/OriginRequestEvent.js'
import { EdgeIncludeBodyOption } from '../field/EdgeIncludeBodyOption.js'
import { EdgeRequestReturnValue } from '../field/EdgeRequestReturnValue.js'
import { OriginType } from '../field/OriginType.js'

export type OriginRequestHandler<
  Origin extends OriginType,
  RequestOrigin extends OriginType,
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = (
  event: OriginRequestEvent<Origin, IncludeBody>,
  context: LambdaRequestContext,
  callback: LambdaResponseCallback<EdgeRequestReturnValue<RequestOrigin>>
) =>
  | Promise<EdgeRequestReturnValue<RequestOrigin> | void>
  | EdgeRequestReturnValue<RequestOrigin>
  | void
