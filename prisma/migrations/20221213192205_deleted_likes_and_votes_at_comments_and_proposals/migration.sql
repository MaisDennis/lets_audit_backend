/*
  Warnings:

  - You are about to drop the column `likes` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `down_votes` on the `proposals` table. All the data in the column will be lost.
  - You are about to drop the column `relevance_votes` on the `proposals` table. All the data in the column will be lost.
  - You are about to drop the column `up_votes` on the `proposals` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "likes";

-- AlterTable
ALTER TABLE "proposals" DROP COLUMN "down_votes",
DROP COLUMN "relevance_votes",
DROP COLUMN "up_votes";
