interface UploadProp {
  onFileChange: (files: FileList | null) => void;
}

function Upload({ onFileChange }: UploadProp): JSX.Element {
  return (
    <div>
      <input data-testid='input' type='file' accept='.log' onChange={(e) => onFileChange(e.target.files)} />
    </div>
  );
}

export default Upload;
