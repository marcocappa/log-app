import { Data } from '../../types';

interface TableProp {
  body: Data;
  header: string[];
}

function Table({ body, header }: TableProp): JSX.Element {
  const renderHeaders = () => {
    return header.map((head) => <th key={head}>{head}</th>);
  };
  const renderBody = () => {
    return Object.entries(body).map((row) => (
      <tr key={row[0]}>
        <td>{row[0]}</td>
        <td>{row[1]}</td>
      </tr>
    ));
  };
  return (
    <div>
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
