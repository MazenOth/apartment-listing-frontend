export const ROUTES = {
  home: '/',
  addApartment: '/add-apartment',
  addProject: '/add-project',
  apartmentDetails: (id: number) => `/apartments/${String(id)}`,
};
