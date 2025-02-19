import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import CVPreview from "./components/CVPreview";
import "./App.css";

import previousIcon from "./assets/previous.svg";
import nextIcon from "./assets/next.svg";

function App() {
  const [cvData, setCvData] = useState({
    generalInfo: { name: "", address: "", email: "", phone: "" },
    experience: [],
    education: [],
  });

  const [currentSection, setCurrentSection] = useState(1);

  function handleNext() {
    setCurrentSection(currentSection + 1);
  }

  function handlePrevious() {
    setCurrentSection(currentSection - 1);
  }

  return (
    <div className="appContainer">
      <div className="formContainer">
        <h1 className="appTitle">CV Builder</h1>
        {currentSection === 1 && (
          <div className="formSection">
            <GeneralInfoForm cvData={cvData} setCvData={setCvData} />
            <div className="buttonContainer">
              <button onClick={handleNext}>
                <img src={nextIcon} alt="Next" />
              </button>
            </div>
          </div>
        )}

        {currentSection === 2 && (
          <div className="formSection">
            <ExperienceForm cvData={cvData} setCvData={setCvData} />
            <div className="buttonContainer">
              <button onClick={handlePrevious}>
                <img src={previousIcon} alt="Previous" />
              </button>
              <button onClick={handleNext}>
                <img src={nextIcon} alt="Next" />
              </button>
            </div>
          </div>
        )}

        {currentSection === 3 && (
          <div className="formSection">
            <EducationForm cvData={cvData} setCvData={setCvData} />
            <div className="buttonContainer">
              <button onClick={handlePrevious}>
                <img src={previousIcon} alt="Previous" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="previewContainer">
        <CVPreview cvData={cvData} />
      </div>
    </div>
  );
}

export default App;
