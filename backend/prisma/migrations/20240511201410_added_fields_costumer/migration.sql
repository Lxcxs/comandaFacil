-- AlterTable
ALTER TABLE `costumer` ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Costumer` ADD CONSTRAINT `Costumer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
