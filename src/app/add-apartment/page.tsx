'use client';

import { Box, Input, Button, Textarea } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Apartment } from '@/types/types';
import { apartmentService } from '@/services/apartmentService';
import { ROUTES } from '@/config/routes';

export default function AddApartment() {
  const [formData, setFormData] = useState<Omit<Apartment, 'id'>>({
    unitName: '',
    unitNumber: '',
    price: 0,
    description: '',
    sizeSQM: 0,
    bedrooms: 0,
    bathrooms: 0,
  });

  const router = useRouter();

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [field]:
          e.target.type === 'number'
            ? Number(e.target.value) || 0
            : e.target.value,
      });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await apartmentService.create(formData);
    router.push(ROUTES.home);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Unit Name</FormLabel>
          <Input
            value={formData.unitName}
            onChange={handleChange('unitName')}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Unit Number</FormLabel>
          <Input
            value={formData.unitNumber}
            onChange={handleChange('unitNumber')}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Price</FormLabel>
          <Input
            type='number'
            min={0}
            value={formData.price}
            onChange={handleChange('price')}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={formData.description}
            onChange={handleChange('description')}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Size (sqm)</FormLabel>
          <Input
            type='number'
            min={0}
            value={formData.sizeSQM}
            onChange={handleChange('sizeSQM')}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Bedrooms</FormLabel>
          <Input
            type='number'
            min={0}
            value={formData.bedrooms}
            onChange={handleChange('bedrooms')}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Bathrooms</FormLabel>
          <Input
            type='number'
            min={0}
            value={formData.bathrooms}
            onChange={handleChange('bathrooms')}
          />
        </FormControl>
        <Button type='submit'>Add Apartment</Button>
      </form>
    </Box>
  );
}
