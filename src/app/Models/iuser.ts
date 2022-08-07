export interface IUser {
  fullName: string;
  id?: any;
  sellerCode?: number;
  type: string;
  image: string;
  email: string;
  mobileNo: number;
  address: {
    city: string;
    country: string;
  };
  password: string;
}
