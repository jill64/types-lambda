<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/types-lambda


<!----- BEGIN GHOST DOCS BADGES ----->
<a href="https://npmjs.com/package/@jill64/types-lambda"><img src="https://img.shields.io/npm/v/@jill64/types-lambda" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/types-lambda"><img src="https://img.shields.io/npm/l/@jill64/types-lambda" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/types-lambda"><img src="https://img.shields.io/npm/dm/@jill64/types-lambda" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/types-lambda"><img src="https://img.shields.io/bundlephobia/min/@jill64/types-lambda" alt="npm-min-size" /></a>
<!----- END GHOST DOCS BADGES ----->


λ Unofficial AWS Lambda type definition

<!----- END GHOST DOCS HEADER ----->

## Examples

### [Lambda (Function URL)](./types/lambda/LambdaHandler.ts)

```ts
import type { LambdaHandler } from '@jill64/types-lambda'

export const handler: LambdaHandler = async (event) => {
  // ...

  return {
    statusCode: 200,
    body: 'Hello from Lambda !'
  }
}
```

### [Lambda (Streaming Response)](./types/streaming/awslambda.ts)

```ts
import { awslambda } from '@jill64/types-lambda'

export const handler = awslambda.streamifyResponse(
  async (event, responseStream, _context) => {
    // ...

    const metadata = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
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
  // ...

  return {
    status: '200'
  }
}
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
