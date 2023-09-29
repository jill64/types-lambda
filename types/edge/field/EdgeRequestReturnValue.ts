import { EdgeResponse } from './EdgeResponse.js'
import { OriginRequest } from './OriginRequest.js'

export type EdgeRequestReturnValue =
  | EdgeResponse
  | OriginRequest<'custom'>
  | OriginRequest<'s3'>
