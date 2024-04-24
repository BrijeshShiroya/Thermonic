import apisauce from 'apisauce';

export const messages = {
  productAdded: 'Product added in cart successfully.',
  productUpdated: 'Product updated in cart successfully.',
  stockNotAvailable: 'Stock not available',
  noDataFound: 'No data found',
};

export const apiConfig = baseURL =>
  apisauce.create({
    baseURL,
    timeout: 30000,

    headers: { 'Content-Type': 'multipart/form-data', 'key': 'Thermonic$77927##' },
  });

export async function getError(response) {
  // if (response.problem === 'CLIENT_ERROR') return response.data.error;
  if (response?.message) {
    return response?.message;
  }
  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.message)) {
    return 'Server is not available';
  }
  return 'Something went wrong';
}

export const UserType = {
  customer: 'customer',
  owner: 'owner',
  manager: 'manager',
  production: 'production',
  dispatcher: 'dispatcher'
}

export const CustomerOrderStatus = {
  accepted: "Accepted",
  dispatched: "Dispatched"
}
