-- CreateTable
CREATE TABLE "_comments_on_users" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_comment" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "_comments_on_users_pkey" PRIMARY KEY ("id_user","id_comment")
);

-- AddForeignKey
ALTER TABLE "_comments_on_users" ADD CONSTRAINT "_comments_on_users_id_comment_fkey" FOREIGN KEY ("id_comment") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_comments_on_users" ADD CONSTRAINT "_comments_on_users_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
