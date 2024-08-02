import bcrypt from "bcrypt";
import prismaClient from "../../prisma";
import { validateFields } from "../../utils/validateFields";
import { CreateWaiterDTO } from "../../DTOs/waiterDTO";
import { validateStore } from "../../utils/validateStore";

export class CreateWaiterService {
  private static readonly SALT_ROUNDS = 10;
  private static readonly ACCOUNT_TYPE = "employee";

  async execute({ waiterName, waiterEmail, waiterPassword, storeId, token }: CreateWaiterDTO) {
    try {
      validateFields({ waiterName, waiterEmail, waiterPassword, storeId });

      const existingStore = await validateStore(storeId);

      const userStoreValidation = await prismaClient.store.findFirst({
        where: { userId: token?.userId },
      });

      if (userStoreValidation?.id !== existingStore.id) {
        throw new Error("Service: This store isn't from this user.");
      }

      const hashedPassword = await bcrypt.hash(waiterPassword, CreateWaiterService.SALT_ROUNDS);
      
      return prismaClient.waiter.create({
        data: {
          waiterName,
          waiterEmail,
          waiterPassword: hashedPassword,
          storeId: existingStore.id,
          accountType: CreateWaiterService.ACCOUNT_TYPE,
        },
      });
    } catch (error) {
      throw new Error(`Service: ${error instanceof Error ? error.message : 'error creating waiter'}`);
    }
  }
}
