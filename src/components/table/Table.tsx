import React from 'react';
import { DataObject } from '../../types';
interface TableProp {
  body: DataObject;
  header: string[];
  title: string;
}

function Table({ title, body, header }: TableProp): JSX.Element {
  const renderHeaders = () => {
    return header.map((head) => (
      <th data-testid={`th-${head}`} key={head}>
        {head}
      </th>
    ));
  };
  const renderBody = () => {
    return Object.keys(body).map((key) => (
      <tr key={key}>
        <td data-testid={`td-url-${key}`}>{body[key]?.url}</td>
        <td data-testid={`td-count-${key}`}>{body[key]?.count}</td>
      </tr>
    ));
  };
  return (
    <div>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
}

export default Table;
