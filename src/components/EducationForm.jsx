import "../styles/EducationForm.css";
import { useState } from "react";

import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

function EducationForm({ cvData, setCvData }) {
  const [education, setEducation] = useState({
    id: crypto.randomUUID(),
    school: "",
    program: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handleEdit(edu) {
    setEducation(edu);
    setIsEditing(true);
    setEditingId(edu.id);
    setShowForm(true);
  }

  function handleDelete(id) {
    setCvData((prevCvData) => ({
      ...prevCvData,
      education: prevCvData.education.filter((edu) => edu.id !== id),
    }));
  }

  function handleAddEducation() {
    setIsEditing(false);
    setEditingId(null);
    setEducation({
      id: crypto.randomUUID(),
      school: "",
      program: "",
      location: "",
      startDate: "",
      endDate: "",
    });
    setShowForm(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      setCvData((prevCvData) => ({
        ...prevCvData,
        education: prevCvData.education.map((edu) =>
          edu.id === editingId ? education : edu
        ),
      }));
      setIsEditing(false);
      setEditingId(null);
    } else {
      setCvData((prevCvData) => ({
        ...prevCvData,
        education: [...prevCvData.education, education],
      }));
    }
    setEducation({
      id: crypto.randomUUID(),
      school: "",
      program: "",
      location: "",
      startDate: "",
      endDate: "",
    });
    setShowForm(false);
  }

  return (
    <>
      <h4>Education</h4>
      {cvData.education.length >= 0 && (
        <>
          {cvData.education.map((edu) => (
            <div key={edu.id} className="savedEducation">
              <div className="program-school">
                <div className="program">{edu.program}</div>
                <div className="school">{edu.school}</div>
              </div>
              <div className="buttonContainer">
                <button type="button" onClick={() => handleEdit(edu)}>
                  <img src={editIcon} alt="Edit" />
                </button>
                <button type="button" onClick={() => handleDelete(edu.id)}>
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {!showForm && (
        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>
      )}

      {showForm && (
        <>
          <h5>{isEditing ? "Edit Education" : "Add Education"}</h5>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="inputField"
              name="school"
              value={education.school}
              onChange={handleChange}
              placeholder="School"
            />
            <input
              className="inputField"
              name="program"
              value={education.program}
              onChange={handleChange}
              placeholder="Program"
            />
            <input
              className="inputField"
              name="location"
              value={education.location}
              onChange={handleChange}
              placeholder="City, Country"
            />
            <input
              className="inputField"
              name="startDate"
              value={education.startDate}
              onChange={handleChange}
              placeholder="Start Date"
            />
            <input
              className="inputField"
              name="endDate"
              value={education.endDate}
              onChange={handleChange}
              placeholder="End Date"
            />
            <button type="submit">
              {isEditing ? "Save Changes" : "Save Education"}
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default EducationForm;
