import express from 'express';
import * as calculatorContrller from '../controllers/calculatorController';
import { validateCalculatorInput } from './../middlewares/validators/calculatorValidator';

const Router = express.Router();

Router.post('/addition', validateCalculatorInput, calculatorContrller.addition);

export default Router;

