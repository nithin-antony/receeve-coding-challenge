export interface StateType {
  accounts: AccountType[];
  claims: ClaimType[];
  accountClaims: ClaimType[];
  accountDetails: AccountType;
  userName: string;
  dashboardData: any;
}

export interface AccountType {
  id: string;
  debtor: {
    title: string;
    firstName: string;
    lastName: string;
    address: {
      address: string;
      city: string;
      state: string;
      zip: number;
      country: string;
    };
    mobilePhone: string;
    email: string;
  };
}

export interface ClaimType {
  id: string;
  accountId: string;
  currency: string;
  baseAmount: number;
  fees: number;
  dueDate: string;
  status: string;
  deletedAt?: string;
  paidAt?: string;
}

export interface ChartDataType {
  labels: Array<string>;
  data: Array<number>;
}
