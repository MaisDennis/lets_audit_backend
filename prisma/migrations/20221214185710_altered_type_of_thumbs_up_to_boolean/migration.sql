/*
  Warnings:

  - You are about to drop the column `thumbdown` on the `_upvotes_on_users` table. All the data in the column will be lost.
  - You are about to drop the column `thumbsup` on the `_upvotes_on_users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "_upvotes_on_users" DROP COLUMN "thumbdown",
DROP COLUMN "thumbsup",
ADD COLUMN     "thumbs_up" BOOLEAN;
