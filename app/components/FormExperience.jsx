"use client";
import React from "react";

const FormExperience = ({ formData, setFormData }) => {
  const addForm = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          id: formData.experience.length + 1,
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          jobDescription: "",
        },
      ],
    });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index][name] = value;
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
  };

  return (
    <div className="tab-pane fade show active" id="experience">
      <div className="txt-experience my-3">Experience</div>

      {formData.experience.map((exp, index) => (
        <div key={exp.id} className="mb-4">
          <div className="form-floating">
            <input
              type="text"
              name="company"
              className="form-control"
              id={`floatingInput-company-${exp.id}`}
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleChange(index, e)}
            />
            <label htmlFor={`floatingInput-company-${exp.id}`}>Company</label>
          </div>

          <div className="form-floating mt-3">
            <input
              type="text"
              name="position"
              className="form-control"
              id={`floatingInput-position-${exp.id}`}
              placeholder="Position"
              value={exp.position}
              onChange={(e) => handleChange(index, e)}
            />
            <label htmlFor={`floatingInput-position-${exp.id}`}>Position</label>
          </div>

          <div className="d-flex">
            <div className="form-floating mt-3 date-start">
              <input
                type="date"
                name="startDate"
                className="form-control"
                id={`floatingInput-startDate-${exp.id}`}
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`floatingInput-startDate-${exp.id}`}>
                Start Date
              </label>
            </div>

            <div className="form-floating mt-3 date-end ms-3">
              <input
                type="date"
                name="endDate"
                className="form-control"
                id={`floatingInput-endDate-${exp.id}`}
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`floatingInput-endDate-${exp.id}`}>
                End Date
              </label>
            </div>
          </div>

          <div className="form-floating mt-3">
            <textarea
              name="jobDescription"
              className="form-control"
              id={`floatingInput-jobDescription-${exp.id}`}
              placeholder="Job Description"
              value={exp.jobDescription}
              onChange={(e) => handleChange(index, e)}
            ></textarea>
            <label htmlFor={`floatingInput-jobDescription-${exp.id}`}>
              Job Description
            </label>
          </div>
        </div>
      ))}

      <div className="form-floating mt-3 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={addForm}>
          <span>Add Experience</span>
        </button>
      </div>
    </div>
  );
};

export default FormExperience;
