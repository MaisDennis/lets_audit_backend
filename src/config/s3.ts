require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs');

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey 
})

// upload a file to S3
export function uploadFile(file: any) {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise()
}

// exports.uploadFile = uploadFile

// list a file from S3 (url)
export function listFile(fileKey: String) {
  const listParams = {
    Bucket: bucketName
  }

  return s3.listObjectsV2(listParams).promise()
}

// exports.listFile = listFile

// download a file from S3
export function getFileStream(fileKey: String) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}

// exports.getFileStream = getFileStream

// delete a file from S3
export function deleteFile(fileKey: String) {
  const deleteParams = {
    Key: fileKey,
    Bucket: bucketName,
  }
  
  return s3.deleteObject(deleteParams).promise();
}

// exports.deleteFile = deleteFile



