-- CreateTable
CREATE TABLE "adminUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RPLDmember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "lab" TEXT NOT NULL,
    "time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "RPLDalat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "lab" TEXT NOT NULL,
    "time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alat" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RPLDdata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "lab" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "adminUser_name_key" ON "adminUser"("name");
