import { LambdaRequestContext } from './LambdaRequestContext.js'
import { LambdaRequestPayload } from './LambdaRequestPayload.js'
import { LambdaResponseCallback } from './LambdaResponseCallback.js'
import type { LambdaResponsePayload } from './LambdaResponsePayload.js'

export type LambdaHandler = (
  event: LambdaRequestPayload,
  context: LambdaRequestContext,
  callback: LambdaResponseCallback
) => Promise<LambdaResponsePayload | void> | LambdaResponsePayload | void
