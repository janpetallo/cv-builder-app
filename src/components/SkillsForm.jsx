import "../styles/SkillsForm.css";
import { useState } from "react";

import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

function SkillsForm({ cvData, setCvData }) {
  const [skill, setSkill] = useState({
    id: crypto.randomUUID(),
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handleEdit(skill) {
    setSkill(skill);
    setIsEditing(true);
    setEditingId(skill.id);
    setShowForm(true);
  }

  function handleDelete(id) {
    setCvData((prevCvData) => ({
        ...prevCvData,
        skills: prevCvData.skills.filter((sk) => sk.id !== id),
    }));
  }

  function handleAddSkill() {
    setIsEditing(false);
    setEditingId(null);
    setSkill({
      id: crypto.randomUUID(),
      description: "",
    });
    setShowForm(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSkill({
      ...skill,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      setCvData((prevCvData) => ({
        ...prevCvData,
        skills: prevCvData.skills.map((sk) =>
          skill.id === editingId ? skill : sk
        ),
      }));
    } else {
      setCvData((prevCvData) => ({
        ...prevCvData,
        skills: [...prevCvData.skills, skill],
      }));
      setIsEditing(false);
      setEditingId(null);
    }
    setSkill({
      id: crypto.randomUUID(),
      description: "",
    });
    setShowForm(false);
  }

  return (
    <>
      <h4>Skills</h4>
      {cvData.skills.length > 0 && (
        <>
          {cvData.skills.map((sk) => (
            <div key={sk.id} className="savedSkill">
              <div className="skill">{sk.description}</div>

              <div className="buttonContainer">
                <button type="button" onClick={() => handleEdit(sk)}>
                  <img src={editIcon} alt="Edit" />
                </button>
                <button type="button" onClick={() => handleDelete(sk.id)}>
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      {!showForm && (
        <button type="button" onClick={handleAddSkill}>
          Add Skill
        </button>
      )}

      {showForm && (
        <>
          <h5>{isEditing ? "Edit Skill" : "Add Skill"}</h5>
          <form className="form" onSubmit={handleSubmit}>
            <textarea
              className="inputField"
              name="description"
              value={skill.description}
              onChange={(e) => handleChange(e)}
              placeholder="Skill"
            />
            <button type="submit">
              {isEditing ? "Save Changes" : "Save Skill"}
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default SkillsForm;
