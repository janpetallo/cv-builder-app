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

  function handleChange(e) {
    const { name, value } = e.target;
    setExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  }

  function handleDescriptionChange(e, id) {
    const { value } = e.target;
    setExperience((prevExperience) => {
      const newDescriptions = prevExperience.descriptions.map((desc) =>
        desc.id === id ? { ...desc, text: value } : desc
      );
      return {
        ...prevExperience,
        descriptions: newDescriptions,
      };
    });
  }

  function addDescriptionField() {
    setExperience((prevExperience) => ({
      ...prevExperience,
      descriptions: [
        ...prevExperience.descriptions,
        { id: crypto.randomUUID(), text: "" },
      ],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCvData((prevCvData) => ({
      ...prevCvData,
      experience: [...prevCvData.experience, experience],
    }));
    setExperience({
        id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      descriptions: [{ id: crypto.randomUUID(), text: "" }],
    });
  }

  return (
    <>
      <h4>Experience</h4>
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
        <button type="submit">Save Experience</button>
      </form>
    </>
  );
}

export default ExperienceForm;