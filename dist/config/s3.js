"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.getFileStream = exports.listFile = exports.uploadFile = void 0;
require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
});
// upload a file to S3
function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    };
    return s3.upload(uploadParams).promise();
}
exports.uploadFile = uploadFile;
// exports.uploadFile = uploadFile
// list a file from S3 (url)
function listFile(fileKey) {
    const listParams = {
        Bucket: bucketName
    };
    return s3.listObjectsV2(listParams).promise();
}
exports.listFile = listFile;
// exports.listFile = listFile
// download a file from S3
function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    };
    return s3.getObject(downloadParams).createReadStream();
}
exports.getFileStream = getFileStream;
// exports.getFileStream = getFileStream
// delete a file from S3
function deleteFile(fileKey) {
    const deleteParams = {
        Key: fileKey,
        Bucket: bucketName,
    };
    return s3.deleteObject(deleteParams).promise();
}
exports.deleteFile = deleteFile;
// exports.deleteFile = deleteFile
//# sourceMappingURL=s3.js.map