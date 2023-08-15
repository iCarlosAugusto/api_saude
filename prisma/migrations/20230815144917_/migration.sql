/*
  Warnings:

  - You are about to drop the column `availableDay` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "availableDay",
ADD COLUMN     "logoImage" TEXT,
ALTER COLUMN "bannerImage" DROP NOT NULL;
