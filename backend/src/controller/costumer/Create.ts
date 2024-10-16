import { Request, Response } from 'express';
import { SigninCostumerService } from '../../services/costumer/CreateService';

export class CreateCostumerController {
  async handle(req: Request, res: Response) {
    try {
      const costumerService = new SigninCostumerService();
      
      // Desestruturar os valores do corpo da requisição
      const { tableNumber, tablePeopleAmount, waiterId, costumerName, storeId } = req.body;

      // Converter os valores para números
      const tableNumberNumber = parseInt(tableNumber, 10);
      const tablePeopleAmountNumber = parseInt(tablePeopleAmount, 10);
      const storeIdNumber = parseInt(storeId, 10);

      // Chamar o serviço com os valores convertidos
      const result = await costumerService.execute({ 
        tableNumber: tableNumberNumber, 
        tablePeopleAmount: tablePeopleAmountNumber, 
        waiterId, 
        storeId: storeIdNumber, 
        costumerName 
      });

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: `Controller: ${error instanceof Error ? error.message : 'error creating costumer.'}` });
    }
  }
}
