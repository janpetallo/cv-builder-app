import "../styles/ExperienceForm.css";
import { useState } from "react";

function ExperienceForm({ cvData, setCvData }) {
  const [experience, setExperience] = useState({
    id: crypto.randomUUID(),
    company: "",
    position: "",
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
      startDate: "",
      endDate: "",
      descriptions: [{ id: crypto.randomUUID(), text: "" }],
    });
    setShowForm(false);
  }

  return (
    <>
      <h4>Work Experience</h4>
      {cvData.experience.length >= 0 && (
        <>
          {cvData.experience.map((exp) => (
            <div key={exp.id} className="savedExperience">
              <div className="position-company">
                <div className="position">{exp.position}</div>
                <div className="company">{exp.company}</div>
              </div>

              <button type="button" onClick={() => handleEdit(exp)}>
                Edit
              </button>

              <button type="button" onClick={() => handleDelete(exp.id)}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddExperience}>
            Add Experience
          </button>
        </>
      )}

      {showForm && (
        <>
          <h4>{isEditing ? "Edit Experience" : "Add Experience"}</h4>
          <form className="formContainer" onSubmit={handleSubmit}>
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
              <textarea
                key={description.id}
                className="inputField"
                value={description.text}
                onChange={(e) => handleDescriptionChange(e, description.id)}
                placeholder="Description"
              />
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

export default ExperienceForm;
