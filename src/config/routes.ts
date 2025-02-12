export const ROUTES = {
  home: '/',
  addApartment: '/add-apartment',
  apartmentDetails: (id: number) => `/apartments/${String(id)}`,
};
