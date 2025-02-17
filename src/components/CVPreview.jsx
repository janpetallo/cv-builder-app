import "../styles/CVPreview.css";

function CVPreview( { cvData } ) {
  return (
    <div className="cvContainer">
      <h2 className="cvTitle">CV Preview</h2>
      <p>{cvData.generalInfo.name}</p>
      <p>{cvData.generalInfo.email}</p>
      <p>{cvData.generalInfo.phone}</p>
    </div>
  );
}

export default CVPreview;



