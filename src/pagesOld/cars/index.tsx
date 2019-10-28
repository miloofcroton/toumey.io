import React from 'react';
import CarsOverview from 'servicesOld/cars/components/Overview';
import Layout from 'style/layouts/Main';
import { mockCars } from 'servicesOld/cars/data/mocks';

const CarsPage = () => {
  return (
    <Layout>
      <CarsOverview cars={mockCars} />
    </Layout>
  );
};

export default CarsPage;
