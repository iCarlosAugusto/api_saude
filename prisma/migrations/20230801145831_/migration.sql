/*
  Warnings:

  - Added the required column `phoneNumber` to the `partners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "partners" ADD COLUMN     "phoneNumber" TEXT NOT NULL;
