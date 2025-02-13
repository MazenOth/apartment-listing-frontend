export interface Apartment {
  id: number;
  unitName: string;
  unitNumber: string;
  projectName?: string;
  price: number;
  description: string;
  sizeSQM: number;
  bathrooms: number;
  bedrooms: number;
  projectId: number | undefined;
}

export interface Project {
  id: number;
  projectName: string;
  address: string;
}
