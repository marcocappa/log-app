import React from 'react';
import { render, screen } from '@testing-library/react';

import Table from './Table';

test('invoke onFileChange on input change event', async () => {
  const props = {
    header: ['urls', 'totalViews'],
    body: {
      0: { url: '/home', count: 3, ips: ['100.318.035.038', '101.318.035.038', '102.318.035.038'] },
      1: { url: '/about', count: 1, ips: ['100.318.035.038'] },
    },
  };

  render(<Table {...props} />);

  const thUrl = screen.getByTestId('th-urls');
  const thTotalViews = screen.getByTestId('th-totalViews');

  expect(thUrl).toBeInTheDocument();
  expect(thTotalViews).toBeInTheDocument();

  const home = screen.getByText('/home');
  const homeCount = screen.getByText('3');
  expect(home).toBeInTheDocument();
  expect(homeCount).toBeInTheDocument();

  const about = screen.getByText('/about');
  const aboutCount = screen.getByText('1');
  expect(about).toBeInTheDocument();
  expect(aboutCount).toBeInTheDocument();
});
