import axios from "axios";
import { useState } from "react";
import './Referral.css';

const Referral = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referralName: "",
    referralEmail: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending Data:", formData); // ✅ Debug frontend
  
      const response = await axios.post("http://localhost:3001/", formData);
      
      console.log("Server Response:", response.data); // ✅ Debug server response
  
      alert("Referral Submitted Successfully!");
      setShowForm(false);
      setFormData({ referrerName: "", referrerEmail: "", referralName: "", referralEmail: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting referral:", error.response ? error.response.data : error.message);
      alert("Error submitting referral. Please try again.");
    }
  };
  
  return (
    <div className="container text-center mt-5">
      <h5 className="display-4  text-primary mb-4">Accredian</h5>
      <h5 className="display-4 text-5xl text-primary mb-4">Unlock Dream Career with Top Universities</h5>
      <h2 className="lead mb-4">Welcome to Accredian, your gateway to premier online programs from India's top universities, tailored for career success.</h2>
      <h2 className="display-4  text-primary mb-4">Refer & Earn</h2>
      <p className="lead mb-4 ">Invite friends and get exciting rewards. It’s simple, quick, and easy!</p>
      <button className="btn btn-outline btn-lg px-4 py-2 bg-success text-white" onClick={() => setShowForm(true)}>
        Refer a Friend
      </button>
      
      {showForm && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header justify-content-center" id="form">
                <h5 className="modal-title">Referral Form</h5>
                <button type="button" className="btn-close position-absolute end-0 me-3" onClick={() => setShowForm(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {/* Referrer Details */}
                  <h6>Your Details</h6>
                  <div className="mb-3">
                    <label className="form-label" >Your Name</label>
                    <input type="text" className="form-control" name="referrerName" placeholder="Referrar Name" value={formData.referrerName} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Email</label>
                    <input type="email" className="form-control" name="referrerEmail" placeholder="Referrar Email" value={formData.referrerEmail} onChange={handleChange} required />
                  </div>

                  {/* Referral Details */}
                  <h6>Friend's Details</h6>
                  <div className="mb-3">
                    <label className="form-label">Friend's Name</label>
                    <input type="text" className="form-control" name="referralName" placeholder="Referral Name" value={formData.referralName} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Friend's Email</label>
                    <input type="email" className="form-control" name="referralEmail" placeholder="Referral Email" value={formData.referralEmail} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="btn btn-success">Submit</button>
                  <button type="button" className="btn btn-danger ms-2" onClick={() => setShowForm(false)}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Referral;
