import "../styles/CVPreview.css";

function CVPreview({ cvData }) {
  return (
    <div className="cvContainer">
      <div className="cvHeader">
        <div className="name">{cvData.generalInfo.name}</div>
        <div>
          {cvData.generalInfo.address}  |  {cvData.generalInfo.email}  |  {cvData.generalInfo.phone}
        </div>
      </div>







    </div>
  );
}

export default CVPreview;
