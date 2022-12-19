-- CreateTable
CREATE TABLE "_responses_on_users" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_response" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "_responses_on_users_pkey" PRIMARY KEY ("id_response","id_user")
);

-- AddForeignKey
ALTER TABLE "_responses_on_users" ADD CONSTRAINT "_responses_on_users_id_response_fkey" FOREIGN KEY ("id_response") REFERENCES "responses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_responses_on_users" ADD CONSTRAINT "_responses_on_users_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
