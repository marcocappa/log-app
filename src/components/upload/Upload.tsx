import React from 'react';
interface UploadProp {
  onFileChange: (files: FileList | null) => void;
}

function Upload({ onFileChange }: UploadProp): JSX.Element {
  return (
    <div className='app-upload'>
      <p>Select File:</p>
      <input data-testid='input' type='file' accept='.log' onChange={(e) => onFileChange(e.target.files)} />
    </div>
  );
}

export default Upload;
