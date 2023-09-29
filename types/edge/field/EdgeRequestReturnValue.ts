import { OriginRequestEvent } from '../event/OriginRequestEvent.js'
import { EdgeResponse } from './EdgeResponse.js'

export type EdgeRequestReturnValue =
  | EdgeResponse
  | OriginRequestEvent<'custom'>['Records'][0]['cf']['request']
  | OriginRequestEvent<'s3'>['Records'][0]['cf']['request']
