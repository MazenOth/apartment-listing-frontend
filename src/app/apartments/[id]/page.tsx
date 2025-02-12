import { Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { apartmentService } from '@/services/apartmentService';
import { ROUTES } from '@/config/routes';

interface ApartmentDetailsProps {
  params: {
    id: string;
  };
}

export default async function ApartmentDetails({
  params,
}: ApartmentDetailsProps) {
  const apartment = await apartmentService.getById(params.id);

  return (
    <Box p={4}>
      <Text fontSize='2xl'>{apartment.unitName}</Text>
      <Text>Unit #{apartment.unitNumber}</Text>
      <Text>Project: {apartment.projectName}</Text>
      <Text>Size: {apartment.sizeSQM} sqm</Text>
      <Text>Bedrooms: {apartment.bedrooms}</Text>
      <Text>Bathrooms: {apartment.bathrooms}</Text>
      <Text>Description: {apartment.description}</Text>
      <Link href={ROUTES.home}>
        <Button mt={4} colorScheme='teal'>
          Back to Listings
        </Button>
      </Link>
    </Box>
  );
}
