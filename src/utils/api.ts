import getJson from "./get-json";
import { Result } from "./types";

const API_BASE_URL = "https://billions-api.nomadcoders.workers.dev";

export interface Person {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export interface FinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
  exerciseOptionPrice?: number;
}

export interface PersonDetail {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: FinancialAsset[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export const getBillionaires = async (): Promise<Result<Person[]>> => {
  return getJson(new URL(`${API_BASE_URL}/`));
};

export const getBillionaireById = async (
  id: string
): Promise<Result<PersonDetail>> => {
  return getJson(new URL(`${API_BASE_URL}/person/${id}`));
};
