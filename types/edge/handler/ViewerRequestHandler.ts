import { LambdaRequestContext } from '../../lambda/LambdaRequestContext.js'
import { LambdaResponseCallback } from '../../lambda/LambdaResponseCallback.js'
import { ViewerRequestEvent } from '../event/ViewerRequestEvent.js'
import { EdgeIncludeBodyOption } from '../field/EdgeIncludeBodyOption.js'
import { EdgeRequestReturnValue } from '../field/EdgeRequestReturnValue.js'

export type ViewerRequestHandler<
  IncludeBody extends EdgeIncludeBodyOption = undefined
> = (
  event: ViewerRequestEvent<IncludeBody>,
  context: LambdaRequestContext,
  callback: LambdaResponseCallback<EdgeRequestReturnValue>
) => Promise<EdgeRequestReturnValue | void> | EdgeRequestReturnValue | void
