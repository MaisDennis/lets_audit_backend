/*
  Warnings:

  - You are about to drop the `_upvotes_on_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_upvotes_on_users" DROP CONSTRAINT "_upvotes_on_users_id_proposal_fkey";

-- DropForeignKey
ALTER TABLE "_upvotes_on_users" DROP CONSTRAINT "_upvotes_on_users_id_user_fkey";

-- DropTable
DROP TABLE "_upvotes_on_users";
