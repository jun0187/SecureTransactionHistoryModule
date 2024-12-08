import { TRX_TYPE } from "./constant";

export interface TransactionListResModel {
  page: number;
  results: Array<TransactionDataModel>;
  total_pages: number;
  total_results: number;
  isLoading?: boolean;
  isError?: boolean;
}
export type TrxType = (typeof TRX_TYPE)[keyof typeof TRX_TYPE];

export interface TransactionDataModel {
  amount: number;
  date: string;
  description: string;
  type: TrxType;
}
