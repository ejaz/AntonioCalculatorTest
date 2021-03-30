import { ICalculator } from './../models/calculator';
import { Request, Response } from 'express';

export const addition = (req: Request, res: Response) => {
  const data: ICalculator = req.body;

  const response = {
    result: data.firstNumber + data.secondNumber
  }

  return res.send(response);
}