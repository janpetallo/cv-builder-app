import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
// import ExperienceForm from "./components/ExperienceForm";
// import EducationForm from "./components/EducationForm";
// import CVPreview from "./components/CVPreview";
// import styles from "./styles/App.module.css";
import "./App.css";

function App() {
  const [cvData, setCvData] = useState({
    generalInfo: { name: "", email: "", phone: "" },
    experience: [],
    education: [],
  });

  return (
    <div >
      <h1 >CV Builder</h1>
      <GeneralInfoForm cvData={cvData} setCvData={setCvData} />
      {/* <ExperienceForm cvData={cvData} setCvData={setCvData} />
      <EducationForm cvData={cvData} setCvData={setCvData} />
      <CVPreview cvData={cvData} /> */}
    </div>
  );
}

export default App;
