import { parseFile } from './parseData';

test('parseFile return totalViews and uniqueViews objects', () => {
  const mockData = `/home 126.318.035.038
/home 126.318.035.038
/home 184.123.665.067
/about 444.701.448.104
/about 184.123.665.067`;

  const { totalViews, uniqueViews } = parseFile(mockData);

  expect(totalViews).toEqual({ '/home': 3, '/about': 2 });
  expect(uniqueViews).toEqual({ '/home': 2, '/about': 2 });
});
