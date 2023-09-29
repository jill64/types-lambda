import { LambdaRequestContext } from '../../lambda/LambdaRequestContext.js'
import { LambdaResponseCallback } from '../../lambda/LambdaResponseCallback.js'
import { ViewerRequestEvent } from '../event/ViewerRequestEvent.js'
import { EdgeIncludeBodyOption } from '../field/EdgeIncludeBodyOption.js'
import { EdgeRequestReturnValue } from '../field/EdgeRequestReturnValue.js'
import { OriginType } from '../field/OriginType.js'

export type ViewerRequestHandler<
  Origin extends OriginType,
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = (
  event: ViewerRequestEvent<IncludeBody>,
  context: LambdaRequestContext,
  callback: LambdaResponseCallback<EdgeRequestReturnValue<Origin>>
) =>
  | Promise<EdgeRequestReturnValue<Origin> | void>
  | EdgeRequestReturnValue<Origin>
  | void
