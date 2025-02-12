import {
  Box,
  Grid,
  Button,
  Input,
  Flex,
  Spinner,
  Heading,
} from '@chakra-ui/react';
import ApartmentCard from '@/components/apartments/ApartmentCard';
import Link from 'next/link';
import { apartmentService } from '@/services/apartmentService';
import { ROUTES } from '@/config/routes';
import { redirect } from 'next/navigation';

const APARTMENTS_PER_PAGE = 9;

async function handleSearch(formData: FormData) {
  'use server';
  const query = formData.get('search') as string;
  redirect(`?search=${encodeURIComponent(query)}`);
}

async function handlePagination(formData: FormData) {
  'use server';
  const page = formData.get('page') as string;
  redirect(`?page=${page}`);
}

interface HomeProps {
  searchParams: { search?: string; page?: string };
}

export default async function Home({ searchParams }: HomeProps) {
  const searchQuery = searchParams.search || '';
  const currentPage = Number(searchParams.page) || 1;

  const { apartments, totalApartments } = await apartmentService.getAll(
    searchQuery,
    currentPage,
    APARTMENTS_PER_PAGE
  );

  const totalPages = Math.ceil(totalApartments / APARTMENTS_PER_PAGE);

  return (
    <Box p={4}>
      <Link href={ROUTES.home}>
        <Heading mb={4}>Apartment Listings</Heading>
      </Link>

      {/* Search Form */}
      <form action={handleSearch}>
        <Flex mb={4} gap={2}>
          <Input
            name='search'
            placeholder='Search...'
            defaultValue={searchQuery}
          />
          <Button type='submit' colorScheme='teal'>
            Search
          </Button>
        </Flex>
      </form>
      <Link href={ROUTES.addApartment}>
        <Button colorScheme='teal' mb={4}>
          Add Apartment
        </Button>
      </Link>
      {apartments.length === 0 ? (
        <Box>No apartments found.</Box>
      ) : (
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </Grid>
      )}

      {/* Pagination Form */}
      {totalPages > 1 && (
        <Flex justifyContent='center' mt={4} gap={2}>
          {Array.from({ length: totalPages }, (_, i) => (
            <form key={i + 1} action={handlePagination}>
              <input type='hidden' name='page' value={i + 1} />
              <Button
                type='submit'
                colorScheme={i + 1 === currentPage ? 'blue' : 'gray'}
              >
                {i + 1}
              </Button>
            </form>
          ))}
        </Flex>
      )}
    </Box>
  );
}
