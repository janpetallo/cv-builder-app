import "../styles/ExperienceForm.css";
import { useState } from "react";

import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

import PropTypes from "prop-types";

function ExperienceForm({ cvData, setCvData }) {
  const [experience, setExperience] = useState({
    id: crypto.randomUUID(),
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    descriptions: [{ id: crypto.randomUUID(), text: "" }],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handleEdit(exp) {
    setExperience(exp);
    setIsEditing(true);
    setEditingId(exp.id);
    setShowForm(true);
  }

  function handleDelete(id) {
    setCvData((prevCvData) => ({
      ...prevCvData,
      experience: prevCvData.experience.filter((exp) => exp.id !== id),
    }));
  }

  function handleAddExperience() {
    setIsEditing(false);
    setEditingId(null);
    setExperience({
      id: crypto.randomUUID(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      descriptions: [{ id: crypto.randomUUID(), text: "" }],
    });
    setShowForm(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    });
  }

  function handleDescriptionChange(e, id) {
    const { value } = e.target;
    const newDescriptions = experience.descriptions.map((desc) =>
      desc.id === id ? { ...desc, text: value } : desc
    );
    setExperience({
      ...experience,
      descriptions: newDescriptions,
    });
  }

  function addDescriptionField() {
    setExperience({
      ...experience,
      descriptions: [
        ...experience.descriptions,
        { id: crypto.randomUUID(), text: "" },
      ],
    });
  }

  function deleteDescription(id) {
    setExperience({
      ...experience,
      descriptions: experience.descriptions.filter((desc) => desc.id !== id),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      setCvData((prevCvData) => ({
        ...prevCvData,
        experience: prevCvData.experience.map((exp) =>
          exp.id === editingId ? experience : exp
        ),
      }));
      setIsEditing(false);
      setEditingId(null);
    } else {
      setCvData((prevCvData) => ({
        ...prevCvData,
        experience: [...prevCvData.experience, experience],
      }));
    }
    setExperience({
      id: crypto.randomUUID(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      descriptions: [{ id: crypto.randomUUID(), text: "" }],
    });
    setShowForm(false);
  }

  return (
    <>
      <h4>WORK EXPERIENCE</h4>
      {cvData.experience.length > 0 && (
        <>
          {cvData.experience.map((exp) => (
            <div key={exp.id} className="savedExperience">
              <div className="position-company">
                <div className="position">{exp.position}</div>
                <div className="company">{exp.company}</div>
              </div>
              <div className="buttonContainer">
                <button type="button" onClick={() => handleEdit(exp)}>
                  <img src={editIcon} alt="Edit" />
                </button>
                <button type="button" onClick={() => handleDelete(exp.id)}>
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {!showForm && (
        <button type="button" onClick={handleAddExperience}>
          Add Experience
        </button>
      )}

      {showForm && (
        <>
          <h5>{isEditing ? "Edit Experience" : "Add Experience"}</h5>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="inputField"
              name="company"
              value={experience.company}
              onChange={handleChange}
              placeholder="Company"
            />
            <input
              className="inputField"
              name="position"
              value={experience.position}
              onChange={handleChange}
              placeholder="Position"
            />
            <input
              className="inputField"
              name="location"
              value={experience.location}
              onChange={handleChange}
              placeholder="City, Country"
            />
            <input
              className="inputField"
              name="startDate"
              value={experience.startDate}
              onChange={handleChange}
              placeholder="Start Date"
            />
            <input
              className="inputField"
              name="endDate"
              value={experience.endDate}
              onChange={handleChange}
              placeholder="End Date"
            />
            {experience.descriptions.map((description) => (
              <div className="descriptionContainer" key={description.id}>
                <textarea
                  className="inputField"
                  value={description.text}
                  onChange={(e) => handleDescriptionChange(e, description.id)}
                  placeholder="Description"
                />
                <button
                  type="button"
                  onClick={() => deleteDescription(description.id)}
                >
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addDescriptionField}>
              Add Description
            </button>
            <button type="submit">
              {isEditing ? "Save Changes" : "Save Experience"}
            </button>
          </form>
        </>
      )}
    </>
  );
}

ExperienceForm.propTypes = {
  cvData: PropTypes.shape({
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        descriptions: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          })
        ),
      })
    ).isRequired,
  }).isRequired,
  setCvData: PropTypes.func.isRequired,
};


export default ExperienceForm;
