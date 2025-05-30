import "../styles/CVPreview.css";

import editIcon from "../assets/edit2.svg";

import PropTypes from "prop-types";

function CVPreview({ cvData }) {
  function hasInput() {
    const { generalInfo, experience, education } = cvData;
    return (
      generalInfo.name ||
      generalInfo.address ||
      generalInfo.email ||
      generalInfo.phone ||
      experience.length > 0 ||
      education.length > 0
    );
  }

  return (
    <div className="cvContainer">
      {!hasInput() && (
        <div style={{ textAlign: "center" }}>
          <img src={editIcon} alt="Edit" style={{ width: "5rem" }} />
          <h1>Start Building Your CV</h1>
        </div>
      )}
      <div className="cvHeader">
        <div className="name">{cvData.generalInfo.name}</div>
        <div>
          {cvData.generalInfo.address && (
            <span>{cvData.generalInfo.address}</span>
          )}
          {cvData.generalInfo.address &&
            (cvData.generalInfo.email || cvData.generalInfo.phone) && (
              <span> | </span>
            )}
          {cvData.generalInfo.email && <span>{cvData.generalInfo.email}</span>}
          {cvData.generalInfo.email && cvData.generalInfo.phone && (
            <span> | </span>
          )}
          {cvData.generalInfo.phone && <span>{cvData.generalInfo.phone}</span>}
        </div>
      </div>
      <div className="cvBody">
        {cvData.skills.length > 0 && (
          <div className="sectionContainer">
            <div className="sectionHeader">SKILLS</div>
            <hr className="horizontalLine" />
            <ul>
              {cvData.skills.filter((skill) => skill.description.trim() !== "").map((skill) => (
                <li className="skill" key={skill.id}>{skill.description}</li>
              ))}
            </ul>
          </div>
        )}

        {cvData.experience.length > 0 && (
          <div className="sectionContainer">
            <div className="sectionHeader">WORK EXPERIENCE</div>
            <hr className="horizontalLine" />
            {cvData.experience.map((exp) => (
              <div className="experience" key={exp.id}>
                <div className="experienceHeader">
                  <div className="position-company">
                    <div className="position">{exp.position}</div>
                    <div className="company">
                      {exp.company && <span>{exp.company}</span>}
                      {exp.company && exp.location && <span>, </span>}
                      {exp.location && <span>{exp.location}</span>}
                    </div>
                  </div>
                  <div>
                    {exp.startDate && <span>{exp.startDate}</span>}
                    {exp.startDate && exp.endDate && <span> - </span>}
                    {exp.endDate && <span>{exp.endDate}</span>}
                  </div>
                </div>
                <ul>
                  {exp.descriptions
                    .filter((desc) => desc.text.trim() !== "")
                    .map((desc) => (
                      <li key={desc.id}>{desc.text}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {cvData.education.length > 0 && (
          <div className="sectionContainer">
            <div className="sectionHeader">EDUCATION</div>
            <hr className="horizontalLine" />
            {cvData.education.map((edu) => (
              <div className="education" key={edu.id}>
                <div className="educationHeader">
                  <div className="program-school">
                    <div className="program">{edu.program}</div>
                    <div className="school">
                      {edu.school && <span>{edu.school}</span>}
                      {edu.school && edu.location && <span>, </span>}
                      {edu.location && <span>{edu.location}</span>}
                    </div>
                  </div>
                  <div>
                    {edu.startDate && <span>{edu.startDate}</span>}
                    {edu.startDate && edu.endDate && <span> - </span>}
                    {edu.endDate && <span>{edu.endDate}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

CVPreview.propTypes = {
  cvData: PropTypes.shape({
    generalInfo: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        position: PropTypes.string,
        company: PropTypes.string,
        location: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        descriptions: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
          })
        ),
      })
    ),
    education: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        program: PropTypes.string,
        school: PropTypes.string,
        location: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default CVPreview;
