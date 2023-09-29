import { EdgeResponse } from './EdgeResponse.js'
import { OriginRequest } from './OriginRequest.js'
import { OriginType } from './OriginType.js'

export type EdgeRequestReturnValue<T extends OriginType> =
  | EdgeResponse
  | OriginRequest<T>
