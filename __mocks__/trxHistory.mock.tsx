import {
  TransactionDataModel,
  TransactionListResModel,
} from "../src/interface";

export const transactionDataListPage1Mock: TransactionDataModel[] = [
  {
    id: "001",
    amount: 10.2,
    date: "07/06/2024",
    description: "Pay bill",
    type: "credit",
  },
  {
    id: "002",
    amount: 101.33,
    date: "08/06/2024",
    description: "Transfer to Salmon",
    type: "credit",
  },
  {
    id: "003",
    amount: 102,
    date: "09/06/2024",
    description: "Transfer to eWallet",
    type: "credit",
  },
  {
    id: "004",
    amount: 103,
    date: "07/06/2024",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "005",
    amount: 104,
    date: "07/06/2024",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "006",
    amount: 105,
    date: "09/06/2024",
    description: "Pay water bill",
    type: "credit",
  },
  {
    id: "007",
    amount: 106,
    date: "27/08/2024",
    description: "Transfer to CIMB",
    type: "credit",
  },
  {
    id: "008",
    amount: 107,
    date: "17/06/2024",
    description: "Payment on Credit Card",
    type: "credit",
  },
  {
    id: "009",
    amount: 108,
    date: "07/05/2024",
    description: "Salary incoming",
    type: "debit",
  },
  {
    id: "010",
    amount: 109,
    date: "07/07/2024",
    description: "Transfer to HSBC",
    type: "credit",
  },
];

export const transactionDataListPage2Mock: TransactionDataModel[] = [
  {
    id: "011",
    amount: 110,
    date: "17/06/2024",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "012",
    amount: 111,
    date: "07/05/2024",
    description: "Salary incoming",
    type: "debit",
  },
  {
    id: "013",
    amount: 112.3,
    date: "07/07/2023",
    description: "Transfer to Maybank",
    type: "credit",
  },
  {
    id: "014",
    amount: 140,
    date: "07/03/2023",
    description: "Transfer to Maybank",
    type: "credit",
  },
  {
    id: "015",
    amount: 162,
    date: "11/07/2024",
    description: "Transfer to Maybank",
    type: "credit",
  },
  {
    id: "016",
    amount: 177.77,
    date: "07/07/2024",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "017",
    amount: 80.8,
    date: "17/07/2024",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "018",
    amount: 90.8,
    date: "07/09/2024",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "019",
    amount: 10.8,
    date: "07/08/2024",
    description: "Transfer to eWallet",
    type: "credit",
  },
  {
    id: "020",
    amount: 90.8,
    date: "07/07/2024",
    description: "Transfer to eWallet",
    type: "credit",
  },
];

export const transactionDataListPage3Mock: TransactionDataModel[] = [
  {
    id: "021",
    amount: 200,
    date: "07/07/2023",
    description: "Transfer to Maybank",
    type: "credit",
  },
  {
    id: "022",
    amount: 140,
    date: "07/03/2023",
    description: "Transfer to OCBC",
    type: "credit",
  },
  {
    id: "023",
    amount: 99,
    date: "17/06/2023",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "024",
    amount: 3000,
    date: "07/05/2024",
    description: "Salary incoming",
    type: "debit",
  },
  {
    id: "025",
    amount: 70,
    date: "11/12/2024",
    description: "Transfer to Maybank",
    type: "credit",
  },
  {
    id: "026",
    amount: 177.3,
    date: "11/07/2024",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "027",
    amount: 230,
    date: "17/07/2024",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "028",
    amount: 190.8,
    date: "07/09/2024",
    description: "Received Money",
    type: "debit",
  },
  {
    id: "029",
    amount: 100.8,
    date: "07/08/2024",
    description: "Transfer to eWallet",
    type: "credit",
  },
  {
    id: "030",
    amount: 30.8,
    date: "07/10/2024",
    description: "Transfer to eWallet",
    type: "credit",
  },
];

export const transactionListResMock = (
  pageNo: number
): TransactionListResModel => {
  let result: Array<TransactionDataModel>;

  switch (pageNo) {
    case 1:
    default:
      result = transactionDataListPage1Mock;
      break;
    case 2:
      result = transactionDataListPage2Mock;
      break;
    case 3:
      result = transactionDataListPage3Mock;
      break;
  }
  return {
    page: pageNo,
    results: result,
    total_pages: 10,
    total_results: 30,
  };
};
