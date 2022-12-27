-- CreateEnum
CREATE TYPE "ImageType" AS ENUM ('FILE', 'URL');

-- AlterTable
ALTER TABLE "images" ADD COLUMN     "type" "ImageType" NOT NULL DEFAULT 'FILE';
