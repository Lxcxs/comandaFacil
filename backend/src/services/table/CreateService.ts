import { validateFields } from "../../utils/validateFields";
import { CreateTableDTO } from "../../DTOs/tableDTO";
import prismaClient from "../../prisma";
import { validateStore } from "../../utils/validateStore";
import { validateTable } from "../../utils/validateTable";

export class CreateTableService {
  private static readonly TABLE_STATUS = "available";

  async execute({ tableNumber, tablePeopleAmount, storeId, waiterId }: CreateTableDTO) {
    try {
      validateFields({ tableNumber, tablePeopleAmount, storeId });

      const existingStore = await validateStore(storeId);

      const tableData = {
        tableNumber,
        tablePeopleAmount,
        tableStatus: CreateTableService.TABLE_STATUS,
        storeId: existingStore.id,
        waiterId,
      };

      const result = await prismaClient.table.create({ data: tableData });
      return result;
    } catch (error) {
      throw new Error(`Service: ${error instanceof Error ? error.message : 'error creating table'}`);
    }
  }
}
