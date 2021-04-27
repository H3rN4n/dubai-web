-- CreateTable
CREATE TABLE "BotRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "discord" TEXT NOT NULL,
    "message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BotRequest.email_unique" ON "BotRequest"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BotRequest.discord_unique" ON "BotRequest"("discord");
