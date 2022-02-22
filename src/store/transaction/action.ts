import { Transaction } from "../../interface/TransactionState";
import {
  CREATE_TRANSACTION,
  LOAD_TRANSACTION,
  DELETE_TRANSACTION,
} from "./constant";

export const addTransaction = (transaction: Transaction) => {
  return {
    type: CREATE_TRANSACTION,
    payload: transaction,
  };
};

export const loadTransaction = (transactions: Transaction[]) => {
  return {
    type: LOAD_TRANSACTION,
    payload: transactions,
  };
};

export const deleteTransaction = (transactionId: string) => {
  return {
    type: DELETE_TRANSACTION,
    payload: transactionId,
  };
};
