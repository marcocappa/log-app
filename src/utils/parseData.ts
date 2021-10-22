import { DataObject } from '../types';

export const createTotalViewsObj = (arr: string[]): DataObject => {
  const totalViewsObj: DataObject = {};
  arr.forEach((line) => {
    const [url, ip] = line.split(' ');
    if (url === '' || ip === '') return;
    if (totalViewsObj[url]) {
      totalViewsObj[url]['count']++;
      totalViewsObj[url]['ips'].push(ip);
    } else {
      totalViewsObj[url] = {
        count: 1,
        url: url,
        ips: [ip],
      };
    }
  });
  return totalViewsObj;
};

export const createUniqueViewsObj = (arr: string[]): DataObject => {
  const uniqueViewObj: DataObject = {};
  arr.forEach((line) => {
    const [url, ip] = line.split(' ');
    if (url === '' || ip === '') return;
    if (uniqueViewObj[url] && !uniqueViewObj[url]['ips'].includes(ip)) {
      uniqueViewObj[url]['count']++;
      uniqueViewObj[url]['ips'].push(ip);
    } else {
      uniqueViewObj[url] = {
        count: 1,
        url: url,
        ips: [ip],
      };
    }
  });
  return uniqueViewObj;
};

export const parseFile = (fileContent: string): { totalViews: DataObject; uniqueViews: DataObject } => {
  const data = fileContent.split('\n');
  const totalViewsObj = createTotalViewsObj(data);
  const uniqueViewObj = createUniqueViewsObj(data);
  const totalViews = orderObjects(totalViewsObj);
  const uniqueViews = orderObjects(uniqueViewObj);
  return {
    totalViews,
    uniqueViews,
  };
};

export const orderObjects = (data: DataObject): DataObject => {
  const orderedObj: DataObject = {};
  const arr = Object.keys(data).map((key) => data[key]);
  arr.sort(function (a, b) {
    return b.count - a.count;
  });
  arr.forEach((item, index) => (orderedObj[index] = { ...item }));
  return orderedObj;
};
