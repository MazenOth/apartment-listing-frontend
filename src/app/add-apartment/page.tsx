'use client';

import { Box, Input, Button, Textarea } from '@chakra-ui/react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { useRouter } from 'next/navigation';
import { apartmentService } from '@/services/apartmentService';
import { ROUTES } from '@/config/routes';
import ProjectSelect from '@/components/projects/ProjectDropdown';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { apartmentSchema } from '@/validations/validationSchemas';

export default function AddApartment() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(apartmentSchema),
  });

  const onSubmit = async (data: any) => {
    await apartmentService.create(data);
    router.push(ROUTES.home);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4} isInvalid={!!errors.projectId}>
          <FormLabel>Project</FormLabel>
          <ProjectSelect
            onSelect={(projectId) => setValue('projectId', projectId)}
          />
          <FormErrorMessage>{errors.projectId?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.unitName}>
          <FormLabel>Unit Name</FormLabel>
          <Input {...register('unitName')} />
          <FormErrorMessage>{errors.unitName?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.unitNumber}>
          <FormLabel>Unit Number</FormLabel>
          <Input {...register('unitNumber')} />
          <FormErrorMessage>{errors.unitNumber?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.price}>
          <FormLabel>Price</FormLabel>
          <Input type='number' {...register('price')} />
          <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.description}>
          <FormLabel>Description</FormLabel>
          <Textarea {...register('description')} />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.sizeSQM}>
          <FormLabel>Size (sqm)</FormLabel>
          <Input {...register('sizeSQM')} />
          <FormErrorMessage>{errors.sizeSQM?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.bedrooms}>
          <FormLabel>Bedrooms</FormLabel>
          <Input {...register('bedrooms')} />
          <FormErrorMessage>{errors.bedrooms?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.bathrooms}>
          <FormLabel>Bathrooms</FormLabel>
          <Input {...register('bathrooms')} />
          <FormErrorMessage>{errors.bathrooms?.message}</FormErrorMessage>
        </FormControl>
        <Button type='submit'>Add Apartment</Button>
      </form>
    </Box>
  );
}
