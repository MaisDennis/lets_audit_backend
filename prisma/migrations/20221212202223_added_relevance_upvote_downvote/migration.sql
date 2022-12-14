/*
  Warnings:

  - The primary key for the `_comments_on_users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "_comments_on_users" DROP CONSTRAINT "_comments_on_users_pkey",
ADD CONSTRAINT "_comments_on_users_pkey" PRIMARY KEY ("id_comment", "id_user");

-- CreateTable
CREATE TABLE "_proposal_relevance_on_users" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_proposal" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "_proposal_relevance_on_users_pkey" PRIMARY KEY ("id_proposal","id_user")
);

-- CreateTable
CREATE TABLE "_proposal_upvote_on_users" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_proposal" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "_proposal_upvote_on_users_pkey" PRIMARY KEY ("id_proposal","id_user")
);

-- CreateTable
CREATE TABLE "_proposal_downvote_on_users" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_proposal" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "_proposal_downvote_on_users_pkey" PRIMARY KEY ("id_proposal","id_user")
);

-- AddForeignKey
ALTER TABLE "_proposal_relevance_on_users" ADD CONSTRAINT "_proposal_relevance_on_users_id_proposal_fkey" FOREIGN KEY ("id_proposal") REFERENCES "proposals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_proposal_relevance_on_users" ADD CONSTRAINT "_proposal_relevance_on_users_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_proposal_upvote_on_users" ADD CONSTRAINT "_proposal_upvote_on_users_id_proposal_fkey" FOREIGN KEY ("id_proposal") REFERENCES "proposals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_proposal_upvote_on_users" ADD CONSTRAINT "_proposal_upvote_on_users_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_proposal_downvote_on_users" ADD CONSTRAINT "_proposal_downvote_on_users_id_proposal_fkey" FOREIGN KEY ("id_proposal") REFERENCES "proposals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_proposal_downvote_on_users" ADD CONSTRAINT "_proposal_downvote_on_users_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
