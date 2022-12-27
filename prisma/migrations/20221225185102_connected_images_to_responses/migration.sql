-- AlterTable
ALTER TABLE "images" ALTER COLUMN "type" DROP DEFAULT;

-- AlterTable
ALTER TABLE "responses" ADD COLUMN     "id_image" TEXT;

-- AddForeignKey
ALTER TABLE "responses" ADD CONSTRAINT "responses_id_image_fkey" FOREIGN KEY ("id_image") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;
