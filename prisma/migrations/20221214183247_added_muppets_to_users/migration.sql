-- CreateTable
CREATE TABLE "_muppets_on_users" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_proposal" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "_muppets_on_users_pkey" PRIMARY KEY ("id_proposal","id_user")
);

-- AddForeignKey
ALTER TABLE "_muppets_on_users" ADD CONSTRAINT "_muppets_on_users_id_proposal_fkey" FOREIGN KEY ("id_proposal") REFERENCES "proposals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_muppets_on_users" ADD CONSTRAINT "_muppets_on_users_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
