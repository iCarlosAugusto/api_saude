/*
  Warnings:

  - You are about to drop the column `address` on the `partners` table. All the data in the column will be lost.
  - You are about to drop the column `jobDescription` on the `partners` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `partners` table. All the data in the column will be lost.
  - You are about to drop the column `servicePrice` on the `partners` table. All the data in the column will be lost.
  - You are about to drop the column `specialties` on the `partners` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "partners" DROP COLUMN "address",
DROP COLUMN "jobDescription",
DROP COLUMN "phoneNumber",
DROP COLUMN "servicePrice",
DROP COLUMN "specialties";
