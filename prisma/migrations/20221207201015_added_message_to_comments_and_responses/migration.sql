/*
  Warnings:

  - Added the required column `message` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `responses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "message" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "responses" ADD COLUMN     "message" TEXT NOT NULL;
