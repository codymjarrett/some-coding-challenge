import React from 'react'
import { render, cleanup } from '@testing-library/react';
import { mockData } from '../../../mock-data/mock-data'

import Card from '../Card'

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Card movie={mockData} id={1}/>);
  expect(asFragment()).toMatchSnapshot();
});

