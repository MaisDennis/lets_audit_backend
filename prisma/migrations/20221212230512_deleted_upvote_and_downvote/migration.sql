/*
  Warnings:

  - You are about to drop the `_proposal_downvote_on_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_proposal_upvote_on_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_proposal_downvote_on_users" DROP CONSTRAINT "_proposal_downvote_on_users_id_proposal_fkey";

-- DropForeignKey
ALTER TABLE "_proposal_downvote_on_users" DROP CONSTRAINT "_proposal_downvote_on_users_id_user_fkey";

-- DropForeignKey
ALTER TABLE "_proposal_upvote_on_users" DROP CONSTRAINT "_proposal_upvote_on_users_id_proposal_fkey";

-- DropForeignKey
ALTER TABLE "_proposal_upvote_on_users" DROP CONSTRAINT "_proposal_upvote_on_users_id_user_fkey";

-- DropTable
DROP TABLE "_proposal_downvote_on_users";

-- DropTable
DROP TABLE "_proposal_upvote_on_users";
