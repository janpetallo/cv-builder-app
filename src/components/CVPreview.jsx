import "../styles/CVPreview.css";

function CVPreview({ cvData }) {
  return (
    <div className="cvContainer">
      <div className="cvHeader">
        <div className="name">{cvData.generalInfo.name}</div>
        <div>
          {cvData.generalInfo.address} | {cvData.generalInfo.email} |{" "}
          {cvData.generalInfo.phone}
        </div>
      </div>
      <div className="cvBody">
        <div className="sectionContainer">
          <div className="sectionHeader">Work Experience</div>
          <hr className="horizontalLine" />
          {cvData.experience.map((exp) => (
            <div className="experience" key={exp.id}>
              <div className="experienceHeader">
                <div className="position-company">
                  <div className="position">{exp.position}</div>
                  <div className="company">{exp.company}</div>
                </div>
                <div>
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <ul>
                {exp.descriptions.map((desc) => (
                  <li key={desc.id}>{desc.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CVPreview;
