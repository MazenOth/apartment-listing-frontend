'use client';

import { Box, Input, Button, Textarea } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { projectService } from '@/services/projectService';
import { ROUTES } from '@/config/routes';

export default function AddProject() {
  const [formData, setFormData] = useState({
    projectName: '',
    address: '',
  });

  const router = useRouter();

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await projectService.create(formData);
    router.push(ROUTES.home);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Project Name</FormLabel>
          <Input
            value={formData.projectName}
            onChange={handleChange('projectName')}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Address</FormLabel>
          <Input value={formData.address} onChange={handleChange('address')} />
        </FormControl>

        <Button type='submit'>Add Project</Button>
      </form>
    </Box>
  );
}
