import { ListBucketsCommand, S3Client } from '@aws-sdk/client-s3';  


const url = new URL('https://ID:SECRET@s3.REGION.amazonaws.com/bucket-name');
  const s3Client = new S3Client({
    region: 'auto',
    endpoint: url.origin,
    credentials: {
      accessKeyId: url.username ?? '',
      secretAccessKey: url.password ?? '',
    },
    forcePathStyle: true,
  });
  const bucketName = url.pathname.slice(1);
  const params = {
    /** input parameters */
  };
  const command = new ListBucketsCommand(params);

  try {
    const data = s3Client.send(command);
    // process data.
  } catch (error) {
    // error handling.
  } finally {
    // finally.
  }
