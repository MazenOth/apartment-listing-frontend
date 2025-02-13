import * as yup from 'yup';

export const projectSchema = yup.object().shape({
  projectName: yup
    .string()
    .required('Project name is required')
    .min(3, 'Project name must be at least 3 characters')
    .max(100, 'Project name must be at most 100 characters'),

  address: yup
    .string()
    .required('Address is required')
    .min(5, 'Address must be at least 5 characters')
    .max(255, 'Address must be at most 255 characters'),
});

export const apartmentSchema = yup.object().shape({
  projectId: yup.number().required('Project is required'),

  unitName: yup
    .string()
    .required('Unit name is required')
    .min(3, 'Unit name must be at least 3 characters')
    .max(50, 'Unit name must be at most 50 characters'),

  unitNumber: yup
    .string()
    .required('Unit number is required')
    .min(1, 'Unit number must be at least 1 character')
    .max(20, 'Unit number must be at most 20 characters'),

  price: yup
    .number()
    .required('Price is required')
    .min(0, 'Price must be at least 0')
    .typeError('Invalid price'),

  description: yup
    .string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be at most 500 characters'),

  sizeSQM: yup
    .number()
    .required('Size in SQM is required')
    .min(0, 'Size in SQM must be at least 0')
    .typeError('Invalid size'),

  bedrooms: yup
    .number()
    .required('Number of bedrooms is required')
    .min(0, 'Bedrooms must be at least 0')
    .typeError('Invalid number of bedrooms'),

  bathrooms: yup
    .number()
    .required('Number of bathrooms is required')
    .min(0, 'Bathrooms must be at least 0')
    .typeError('Invalid number of bathrooms'),
});
