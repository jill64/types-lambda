<!----- BEGIN GHOST DOCS HEADER ----->
<!----- END GHOST DOCS HEADER ----->

## Install

```sh
npm i -D @jill64/types-lambda
```

## Examples

## [Lambda (Function URL)](./types/lambda/LambdaHandler.ts)

```ts
import type { LambdaHandler } from '@jill64/types-lambda'

const url = 'https://aws.amazon.com/'

export const handler: LambdaHandler = async (event) => {
  try {
    const res = await fetch(url)
    console.info('status', res.status)
    return res.status
  } catch (e) {
    console.error(e)
    return 500
  }
}
```

### [Lambda (Streaming Response)](./types/streaming/awslambda.ts)

```ts
import { awslambda } from '@jill64/types-lambda'

export const handler = awslambda.streamifyResponse(
  async (event, responseStream, _context) => {
    const metadata = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        CustomHeader: 'outerspace'
      }
    }

    responseStream = awslambda.HttpResponseStream.from(responseStream, metadata)

    responseStream.write('Streaming with Helper \n')
    responseStream.write('Hello 0 \n')
    responseStream.write('Hello 1 \n')
    responseStream.write('Hello 2 \n')
    responseStream.end()
    await responseStream.finished()
  }
)
```

### [Lambda@Edge](./types/edge/index.ts)

```ts
import type { OriginRequestHandler } from '@jill64/types-lambda'

export const handler: OriginRequestHandler = async (event, context) => {
  const response = event.Records[0].cf.response
  const headers = response.headers

  const headerNameSrc = 'X-Amz-Meta-Last-Modified'
  const headerNameDst = 'Last-Modified'

  if (headers[headerNameSrc.toLowerCase()]) {
    headers[headerNameDst.toLowerCase()] = [
      headers[headerNameSrc.toLowerCase()][0]
    ]
    console.log(
      `Response header "${headerNameDst}" was set to ` +
        `"${headers[headerNameDst.toLowerCase()][0].value}"`
    )
  }

  return response
}
```
