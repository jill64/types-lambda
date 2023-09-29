import { LambdaRequestContext } from '../../lambda/LambdaRequestContext.js'
import { LambdaResponseCallback } from '../../lambda/LambdaResponseCallback.js'
import { OriginResponseEvent } from '../event/OriginResponseEvent.js'
import { EdgeIncludeBodyOption } from '../field/EdgeIncludeBodyOption.js'
import { EdgeResponseReturnValue } from '../field/EdgeResponseReturnValue.js'
import { OriginType } from '../field/OriginType.js'

export type OriginResponseHandler<
  Origin extends OriginType,
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = (
  event: OriginResponseEvent<Origin, IncludeBody>,
  context: LambdaRequestContext,
  callback: LambdaResponseCallback<EdgeResponseReturnValue>
) => Promise<EdgeResponseReturnValue | void> | EdgeResponseReturnValue | void
