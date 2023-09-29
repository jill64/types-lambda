import { LambdaRequestContext } from '../../lambda/LambdaRequestContext.js'
import { LambdaResponseCallback } from '../../lambda/LambdaResponseCallback.js'
import { OriginResponseEvent } from '../event/OriginResponseEvent.js'
import { EdgeIncludeBodyOption } from '../field/EdgeIncludeBodyOption.js'
import { EdgeOriginType } from '../field/EdgeOriginType.js'
import { EdgeResponseReturnValue } from '../field/EdgeResponseReturnValue.js'

export type OriginResponseHandler<
  Origin extends EdgeOriginType,
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = (
  event: OriginResponseEvent<Origin, IncludeBody>,
  context: LambdaRequestContext,
  callback: LambdaResponseCallback<EdgeResponseReturnValue>
) => Promise<EdgeResponseReturnValue> | EdgeResponseReturnValue
