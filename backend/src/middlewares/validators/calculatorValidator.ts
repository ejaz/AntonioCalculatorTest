import { NextFunction, Request, Response } from "express";

const isNumber = (number: any) => {
  return !isNaN(parseFloat(number));
}

export const validateCalculatorInput = (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    const { firstNumber, secondNumber } = body;

    let error: string = '';

    if (!firstNumber || !secondNumber) {
      error = 'Please provide both firstNumber and secondNumber.';
    } else if (!isNumber(firstNumber) || !isNumber(secondNumber)) {
      error = 'Please provide numeric values.';
    }

    if (error) throw new Error(error)

    req.body.firstNumber = parseFloat(firstNumber);
    req.body.secondNumber = parseFloat(secondNumber);

    next();

  } catch (ex) {
    return res.status(400).send({ message: ex.message })
  }
}