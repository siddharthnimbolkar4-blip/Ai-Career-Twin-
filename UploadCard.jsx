export default function UploadCard({ onUpload, fileInfo, onAnalyze }) {
  return (
    <div className="card">
      <input type="file" accept=".txt,.pdf,.docx" onChange={onUpload} />

      {fileInfo && (
        <>
          <p>Name: {fileInfo.name}</p>
          <p>Type: {fileInfo.type}</p>
          <p>Size: {fileInfo.size}</p>
        </>
      )}

      <button onClick={onAnalyze}>Analyze Resume</button>
    </div>
  );
}
