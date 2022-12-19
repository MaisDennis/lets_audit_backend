-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "message" DROP NOT NULL;

-- AlterTable
ALTER TABLE "responses" ALTER COLUMN "message" DROP NOT NULL;
