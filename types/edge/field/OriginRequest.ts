import { EdgeHeaders } from './EdgeHeaders.js'
import { OriginType } from './OriginType.js'

/**
 * The origin to send the request to.
 * The origin structure must contain exactly one origin, which can be a custom origin or an Amazon S3 origin.
 */
export type OriginRequest<T extends OriginType> = {
  /**
   * You can include custom headers with the request by specifying a header name and value pair for each custom header.
   * You can't add headers that are disallowed, and a header with the same name can't be present in `Records.cf.request.headers`.
   * The [notes about request headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#request-event-fields-request-headers) also apply to custom headers.
   * For more information, see [Custom headers that CloudFront can’t add to origin requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html#add-origin-custom-headers-denylist) and [Restrictions on edge functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-restrictions.html).
   */
  customHeaders: EdgeHeaders
  /**
   * The domain name of the origin.
   * The domain name can't be empty.
   * - For custom origins – Specify a DNS domain name, such as www.example.com.
   * The domain name can't include a colon (:), and can't be an IP address.
   * The domain name can be up to 253 characters.
   * - For Amazon S3 origins – Specify the DNS domain name of the Amazon S3 bucket, such as `awsexamplebucket.s3.eu-west-1.amazonaws.com`.
   * The name can be up to 128 characters, and must be all lowercase.
   * @example "example.org"
   */
  domainName: string
  /**
   * The directory path at the origin where the request should locate content.
   * The path should start with a forward slash (/) but shouldn't end with one (for example, it shouldn't end with example-path/).
   * For custom origins only, the path should be URL encoded and have a maximum length of 255 characters.
   */
  path: string
} & (T extends 'custom'
  ? {
      /**
       * How long, in seconds, that CloudFront should try to maintain the connection to the origin after receiving the last packet of the response.
       * The value must be a number from 1–60, inclusive.
       * @example 5
       */
      keepaliveTimeout: number
      /**
       * The port that CloudFront should connect to at your custom origin.
       * The port must be 80, 443, or a number in the range of 1024–65535, inclusive.
       * @example 443
       */
      port: number
      /**
       * The connection protocol that CloudFront should use when connecting to your origin.
       * The value can be http or https.
       */
      protocol: 'http' | 'https'
      /**
       * How long, in seconds, CloudFront should wait for a response after sending a request to your origin.
       * This also specifies how long CloudFront should wait after receiving a packet of a response before receiving the next packet.
       * The value must be a number from 4–60, inclusive.
       * @example 30
       */
      readTimeout: number
      /**
       * The minimum SSL/TLS protocol that CloudFront can use when establishing an HTTPS connection with your origin.
       * Values can be any of the following: `TLSv1.2`, `TLSv1.1`, `TLSv1`, or `SSLv3`.
       * @example ["TLSv1", "TLSv1.1", "TLSv1.2"]
       */
      sslProtocols: ('SSLv3' | 'TLSv1' | 'TLSv1.1' | 'TLSv1.2')[]
    }
  : {
      /**
       * If you're using an [origin access identity (OAI)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-oai), set this field to `origin-access-identity`.
       * If you aren't using an OAI, set it to `none`.
       * If you set `authMethod` to `origin-access-identity`, there are several requirements:
       * - You must specify the `region` (see the following field).
       * - You must use the same OAI when you change the request from one Amazon S3 origin to another.
       * - You can't use an OAI when you change the request from a custom origin to an Amazon S3 origin.
       * Note: This field does not support [origin access control (OAC)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html).
       */
      authMethod: 'origin-access-identity' | 'none'
      /**
       * The AWS Region of your Amazon S3 bucket.
       * This is required only when you set authMethod to origin-access-identity.
       */
      region: string
    })
