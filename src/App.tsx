import React, { useState } from 'react';
import Upload from './components/upload/Upload';
import Table from './components/table/Table';
import { parseFile } from './utils/parseData';
import { DataObject } from './types';
import logImage from './assets/log.png';
import './App.css';

function App(): JSX.Element {
  const [error, setError] = useState('');
  const [totalViews, setTotalViews] = useState<DataObject>({});
  const [uniqueViews, setUniqueViews] = useState<DataObject>({});

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
    <div className='app'>
      <h1>Log App</h1>
      <p>Please select a log file in this format:</p>
      <img src={logImage} alt='Log file example' className='app-image' />
      <Upload onFileChange={handleFileChange} />
      {error && <p>Error: Something went wrong uploading the file or data wrong!</p>}
      {!error && Object.keys(totalViews).length > 0 && (
        <Table title='Total Views per urls' header={['url', 'total views']} body={totalViews} />
      )}
      {!error && Object.keys(totalViews).length > 0 && (
        <Table title='Unique Views per urls' header={['url', 'unique views']} body={uniqueViews} />
      )}
    </div>
  );
}

export default App;
