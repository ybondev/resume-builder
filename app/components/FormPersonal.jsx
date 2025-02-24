import React from "react";

const FormPersonal = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="tab-pane fade show active" id="personal">
      <div className="txt-personal my-3">personal information</div>
      <div className="form-floating">
        <input
          type="text"
          name="fullName"
          className="form-control"
          id="floatingInput"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Full Name</label>
      </div>
      <div className="form-floating mt-3">
        <input
          type="Email"
          name="email"
          className="form-control"
          id="floatingInput"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Email</label>
      </div>
      <div className="form-floating mt-3">
        <input
          type="Phone"
          name="phone"
          className="form-control"
          id="floatingInput"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Phone</label>
      </div>
      <div className="form-floating mt-3">
        <input
          type="Location"
          name="location"
          className="form-control"
          id="floatingInput"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Location</label>
      </div>
      <div className="form-floating mt-3">
        <textarea
          name="summary"
          id="floatingInput"
          className="form-control"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="floatingInput">Summary</label>
      </div>
    </div>
  );
};

export default FormPersonal;
