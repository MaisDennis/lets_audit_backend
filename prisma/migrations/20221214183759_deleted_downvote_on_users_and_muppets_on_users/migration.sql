/*
  Warnings:

  - You are about to drop the `_downvotes_on_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_muppets_on_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_downvotes_on_users" DROP CONSTRAINT "_downvotes_on_users_id_proposal_fkey";

-- DropForeignKey
ALTER TABLE "_downvotes_on_users" DROP CONSTRAINT "_downvotes_on_users_id_user_fkey";

-- DropForeignKey
ALTER TABLE "_muppets_on_users" DROP CONSTRAINT "_muppets_on_users_id_proposal_fkey";

-- DropForeignKey
ALTER TABLE "_muppets_on_users" DROP CONSTRAINT "_muppets_on_users_id_user_fkey";

-- AlterTable
ALTER TABLE "_upvotes_on_users" ADD COLUMN     "thumbdown" INTEGER,
ADD COLUMN     "thumbsup" INTEGER;

-- DropTable
DROP TABLE "_downvotes_on_users";

-- DropTable
DROP TABLE "_muppets_on_users";
