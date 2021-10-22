import { parseFile, createTotalViewsObj, createUniqueViewsObj, orderObjects } from './parseData';

test('parseFile return totalViews and uniqueViews objects', () => {
  const mockData = `/home 100.318.035.038
/home 102.123.665.067
/about 184.123.665.067
/about 184.123.665.067
/about 186.123.665.067
/about 187.123.665.067`;

  const { totalViews, uniqueViews } = parseFile(mockData);

  expect(totalViews).toEqual({
    '0': {
      url: '/about',
      count: 4,
      ips: ['184.123.665.067', '184.123.665.067', '186.123.665.067', '187.123.665.067'],
    },
    '1': {
      url: '/home',
      count: 2,
      ips: ['100.318.035.038', '102.123.665.067'],
    },
  });
  expect(uniqueViews).toEqual({
    '0': {
      url: '/about',
      count: 3,
      ips: ['184.123.665.067', '186.123.665.067', '187.123.665.067'],
    },
    '1': {
      url: '/home',
      count: 2,
      ips: ['100.318.035.038', '102.123.665.067'],
    },
  });
});

test('createTotalViewsObj', () => {
  const mockData = [
    '/home 100.318.035.038',
    '/home 102.123.665.067',
    '/about 184.123.665.067',
    '/about 184.123.665.067',
    '/about 186.123.665.067',
    '/about 187.123.665.067',
  ];

  const totalViews = createTotalViewsObj(mockData);

  expect(totalViews).toEqual({
    '/home': {
      url: '/home',
      count: 2,
      ips: ['100.318.035.038', '102.123.665.067'],
    },
    '/about': {
      url: '/about',
      count: 4,
      ips: ['184.123.665.067', '184.123.665.067', '186.123.665.067', '187.123.665.067'],
    },
  });
});

test('createUniqueViewsObj', () => {
  const mockData = [
    '/home 100.318.035.038',
    '/home 102.123.665.067',
    '/about 184.123.665.067',
    '/about 184.123.665.067',
    '/about 186.123.665.067',
    '/about 187.123.665.067',
  ];

  const totalViews = createUniqueViewsObj(mockData);

  expect(totalViews).toEqual({
    '/home': {
      url: '/home',
      count: 2,
      ips: ['100.318.035.038', '102.123.665.067'],
    },
    '/about': {
      url: '/about',
      count: 3,
      ips: ['184.123.665.067', '186.123.665.067', '187.123.665.067'],
    },
  });
});

test('orderObjects return ordered objects based on count', () => {
  const mockData = {
    home: {
      url: '/home',
      count: 2,
      ips: ['100.318.035.038', '102.123.665.067'],
    },
    about: {
      url: '/about',
      count: 3,
      ips: ['100.318.035.038', '102.123.665.067', '103.123.665.067'],
    },
  };
  const result = orderObjects(mockData);
  expect(result).toEqual({
    '0': {
      url: '/about',
      count: 3,
      ips: ['100.318.035.038', '102.123.665.067', '103.123.665.067'],
    },
    '1': {
      url: '/home',
      count: 2,
      ips: ['100.318.035.038', '102.123.665.067'],
    },
  });
});
