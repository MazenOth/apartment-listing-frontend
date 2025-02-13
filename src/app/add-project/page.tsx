'use client';

import { Box, Input, Button, Textarea } from '@chakra-ui/react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { useRouter } from 'next/navigation';
import { projectService } from '@/services/projectService';
import { ROUTES } from '@/config/routes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { projectSchema } from '@/validations/validationSchemas';

export default function AddProject() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectSchema),
  });

  const onSubmit = async (data: any) => {
    await projectService.create(data);
    router.push(ROUTES.home);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4} isInvalid={!!errors.projectName}>
          <FormLabel>Project Name</FormLabel>
          <Input {...register('projectName')} />
          <FormErrorMessage>{errors.projectName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.address}>
          <FormLabel>Address</FormLabel>
          <Input {...register('address')} />
          <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
        </FormControl>

        <Button type='submit'>Add Project</Button>
      </form>
    </Box>
  );
}
