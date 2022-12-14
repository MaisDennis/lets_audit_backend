/*
  Warnings:

  - You are about to drop the `_downvotes_on_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_downvotes_on_users" DROP CONSTRAINT "_downvotes_on_users_id_proposal_fkey";

-- DropForeignKey
ALTER TABLE "_downvotes_on_users" DROP CONSTRAINT "_downvotes_on_users_id_user_fkey";

-- DropTable
DROP TABLE "_downvotes_on_users";

-- CreateTable
CREATE TABLE "_upvotes_on_users" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_proposal" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "thumbs_up" BOOLEAN,

    CONSTRAINT "_upvotes_on_users_pkey" PRIMARY KEY ("id_proposal","id_user")
);

-- CreateTable
CREATE TABLE "downvotes_on_users" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_proposal" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "thumbs_down" BOOLEAN,

    CONSTRAINT "downvotes_on_users_pkey" PRIMARY KEY ("id_proposal","id_user")
);

-- AddForeignKey
ALTER TABLE "_upvotes_on_users" ADD CONSTRAINT "_upvotes_on_users_id_proposal_fkey" FOREIGN KEY ("id_proposal") REFERENCES "proposals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_upvotes_on_users" ADD CONSTRAINT "_upvotes_on_users_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "downvotes_on_users" ADD CONSTRAINT "downvotes_on_users_id_proposal_fkey" FOREIGN KEY ("id_proposal") REFERENCES "proposals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "downvotes_on_users" ADD CONSTRAINT "downvotes_on_users_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
