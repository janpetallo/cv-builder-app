import "../styles/GeneralInfoForm.css";

function GeneralInfoForm({ cvData, setCvData }) {

    function handleChange(e) {
        setCvData({
            ...cvData,
            generalInfo: {
                ...cvData.generalInfo,
                [e.target.name]: e.target.value
            }
        });
    }

    return (
        <form className="formContainer">
            <input className="inputField" name="name" value={cvData.generalInfo.name} onChange={handleChange} placeholder="Full Name" />
            <input className="inputField" name="email" value={cvData.generalInfo.email} onChange={handleChange} placeholder="Email" />
            <input className="inputField" name="phone" value={cvData.generalInfo.phone} onChange={handleChange} placeholder="Phone" />
        </form>
    );
}

export default GeneralInfoForm;











