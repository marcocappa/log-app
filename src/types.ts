export interface SingleData {
  url: string;
  count: number;
  ips: string[];
}
export interface DataObject {
  [key: string]: SingleData;
}
