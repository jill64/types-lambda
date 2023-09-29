import { LambdaRequestContext } from '../../lambda/LambdaRequestContext.js'
import { LambdaResponseCallback } from '../../lambda/LambdaResponseCallback.js'
import { ViewerResponseEvent } from '../event/ViewerResponseEvent.js'
import { EdgeResponseReturnValue } from '../field/EdgeResponseReturnValue.js'

export type ViewerResponseHandler = (
  event: ViewerResponseEvent,
  context: LambdaRequestContext,
  callback: LambdaResponseCallback<EdgeResponseReturnValue>
) => Promise<EdgeResponseReturnValue> | EdgeResponseReturnValue
