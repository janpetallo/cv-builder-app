import "../styles/GeneralInfoForm.css";
import PropTypes from "prop-types";

function GeneralInfoForm({ cvData, setCvData }) {
  function handleChange(e) {
    setCvData({
      ...cvData,
      generalInfo: {
        ...cvData.generalInfo,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <>
      <h4>PERSONAL INFORMATION</h4>
      <form className="form">
        <input
          className="inputField"
          name="name"
          value={cvData.generalInfo.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          className="inputField"
          name="address"
          value={cvData.generalInfo.address}
          onChange={handleChange}
          placeholder="City, Country"
        />
        <input
          className="inputField"
          name="email"
          value={cvData.generalInfo.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="inputField"
          name="phone"
          value={cvData.generalInfo.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
      </form>
    </>
  );
}

GeneralInfoForm.propTypes = {
  cvData: PropTypes.shape({
    generalInfo: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    }).isRequired,
  }).isRequired,
  setCvData: PropTypes.func.isRequired,
};


export default GeneralInfoForm;
