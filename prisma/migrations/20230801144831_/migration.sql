/*
  Warnings:

  - A unique constraint covering the columns `[regiterCode]` on the table `partners` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `regiterCode` to the `partners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "partners" ADD COLUMN     "regiterCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "partners_regiterCode_key" ON "partners"("regiterCode");
