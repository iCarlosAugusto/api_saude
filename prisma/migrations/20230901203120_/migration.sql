/*
  Warnings:

  - Added the required column `consultPriceMedium` to the `partners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consultTimeMedium` to the `partners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "partners" ADD COLUMN     "consultPriceMedium" TEXT NOT NULL,
ADD COLUMN     "consultTimeMedium" TEXT NOT NULL;
