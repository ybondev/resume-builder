import React from "react";

const FormCertificate = ({ formData, setFormData }) => {
  const addForm = () => {
    setFormData({
      ...formData,
      certificates: [
        ...formData.certificates,
        {
          id: formData.certificates.length + 1,
          certificate: "",
          issuingOrganization: "",
          date: "",
        },
      ],
    });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCertificate = [...formData.certificates];
    updatedCertificate[index][name] = value;
    setFormData({
      ...formData,
      certificates: updatedCertificate,
    });
  };

  return (
    <>
      <div className="tab-pane fade show active" id="certificates">
        <div className="txt-certificates my-3">Certificates</div>

        {formData.certificates.map((form, index) => (
          <div key={form.id} className="mb-4">
            <div className="form-floating">
              <input
                type="text"
                name="certificate"
                className="form-control"
                id={`floatingInput-certificate-${form.id}`}
                placeholder="Certificate Name"
                value={form.certificate}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`floatingInput-certificate-${form.id}`}>
                Certificate Name
              </label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="text"
                name="issuingOrganization"
                className="form-control"
                id={`floatingInput-issuingOrganization-${form.id}`}
                placeholder="Issuing Organization"
                value={form.issuingOrganization}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`floatingInput-issuingOrganization-${form.id}`}>
                Issuing Organization
              </label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="date"
                name="date"
                className="form-control"
                id={`floatingInput-date-${form.id}`}
                placeholder="Date"
                value={form.date}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`floatingInput-date-${form.id}`}>Date</label>
            </div>
          </div>
        ))}
        <div className="form-floating mt-3 d-flex justify-content-end">
          <button className="btn btn-primary" onClick={addForm}>
            <span>Add Certificate</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FormCertificate;
