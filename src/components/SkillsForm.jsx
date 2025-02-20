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
    setExperience(skill);
    setIsEditing(true);
    setEditingId(skill.id);
    setShowForm(true);
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
    } else {
      setCvData((prevCvData) => ({
        ...prevCvData,
        skills: [...prevCvData.skills, skill],
      }));
    }
    setSkill({
      id: crypto.randomUUID(),
      description: "",
    });
    setShowForm(false);
  }

  return (
    <>
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
