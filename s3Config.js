import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const S3_BUCKET = import.meta.env.VITE_AWS_BUCKET_NAME;
const REGION = import.meta.env.VITE_AWS_REGION;
const ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
const SECRET_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
  endpoint: `https://s3.${REGION}.amazonaws.com`,
  forcePathStyle: true, 
});


const uploadFileToS3 = async (file, fileName) => {
  try {
    const fileBuffer = await file.arrayBuffer();

    const params = {
      Bucket: S3_BUCKET,
      Key: `uploads/${fileName}`,
      Body: fileBuffer, 
      ContentType: file.type,
      ACL: "public-read",
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    const fileUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/uploads/${fileName}`;
    console.log("File uploaded successfully:", fileUrl);
    return fileUrl;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
};

export { uploadFileToS3 };
