export type User = {
  firstName: string,
  lastName: string,
  email: string,
  address?: {
    street?: string,
    city?: string,
    province?: string,
    postcode?: string,
  }
};
