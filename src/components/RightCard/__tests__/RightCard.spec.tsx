import React from 'react'
import { render, cleanup } from '@testing-library/react';
import { mockData } from '../../../mock-data/mock-data'

import RightCard from '../RightCard'

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<RightCard movie={mockData()}/>);
  expect(asFragment()).toMatchSnapshot();
});

