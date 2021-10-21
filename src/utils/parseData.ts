import { Data } from '../types';

export const parseFile = (fileContent: string): { totalViews: Data; uniqueViews: Data } => {
  const totalViews: Data = {};
  const uniqueViews: Data = {};
  const countIps: { [key: string]: string } = {};
  fileContent.split('\n').forEach((line) => {
    const [url, ip] = line.split(' ');
    if (url === '' || ip === '') return;
    totalViews[url] ? totalViews[url]++ : (totalViews[url] = 1);
    if (uniqueViews[url] && countIps[ip] !== url) {
      uniqueViews[url]++;
    } else {
      uniqueViews[url] = 1;
      countIps[ip] = url;
    }
  });
  return {
    totalViews,
    uniqueViews,
  };
};
