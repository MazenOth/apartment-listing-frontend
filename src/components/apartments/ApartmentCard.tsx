'use client';

import { Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { Apartment } from '@/types/types';
import { ROUTES } from '@/config/routes';

interface ApartmentCardProps {
  apartment: Apartment;
}

export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  return (
    <Box borderWidth='1px' borderRadius='lg' p={4}>
      <Text fontSize='xl'>{apartment.unitName}</Text>
      <Text>{apartment.unitNumber}</Text>
      <Text>{apartment.projectName}</Text>
      <Link href={`${ROUTES.apartmentDetails(apartment.id)}`}>
        <Button mt={2} colorScheme='blue'>
          View Details
        </Button>
      </Link>
    </Box>
  );
}
