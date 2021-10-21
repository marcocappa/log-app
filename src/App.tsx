import { useState } from 'react';
import Upload from './components/upload/Upload';
import Table from './components/table/Table';
import { parseFile } from './utils/parseData';
import './App.css';

function App(): JSX.Element {
  const [error, setError] = useState('');
  const [totalViews, setTotalViews] = useState({});
  const [uniqueViews, setUniqueViews] = useState({});

  const handleFileChange = async (files: FileList | null) => {
    if (!files) {
      setError('Error: Something went wrong uploading the file!');
      return;
    }
    const fileData = await new Response(files[0]).text();
    const { totalViews, uniqueViews } = parseFile(fileData);
    setTotalViews(totalViews);
    setUniqueViews(uniqueViews);
  };

  return (
    <div>
      <h1>Log App</h1>
      <Upload onFileChange={handleFileChange} />
      {error && 'Error: Something went wrong uploading the file or data wrong!'}
      {!error && totalViews && <Table header={['url', 'total views']} body={totalViews} />}
      {!error && totalViews && <Table header={['url', 'unique views']} body={uniqueViews} />}
    </div>
  );
}

export default App;
