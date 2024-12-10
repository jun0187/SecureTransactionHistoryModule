import { TRX_TYPE } from "./constant";

export interface DataModel<t> {
  results: Array<t>;
  total_pages: number;
  page: number;
  total_results: number;
  isError?: boolean;
  isLoading?: boolean;
}

export type TransactionListResModel = DataModel<TransactionDataModel>;

export type TrxType = (typeof TRX_TYPE)[keyof typeof TRX_TYPE];

export interface TransactionDataModel {
  id: string;
  amount: number;
  date: string;
  description: string;
  type: TrxType;
}
