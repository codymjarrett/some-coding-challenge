import React from 'react'
import { render, cleanup } from '@testing-library/react';
import { mockData } from '../../../mock-data/mock-data'

import TopCard from '../TopCard'

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<TopCard movie={mockData}/>);
  expect(asFragment()).toMatchSnapshot();
});

