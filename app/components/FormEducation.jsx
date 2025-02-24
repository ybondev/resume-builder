"use client";
import React from "react";

const FormEducation = ({ formData, setFormData }) => {
  const addForm = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          id: formData.education.length + 1,
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  return (
    <div className="tab-pane fade show active" id="education">
      <div className="txt-education my-3">Education</div>
      {formData.education.map((exp, index) => (
        <div key={exp.id} className="mb-4">
          <div className="form-floating">
            <input
              type="text"
              name="school"
              className="form-control"
              id={`floatingInput-school-${exp.id}`}
              placeholder="school"
              value={exp.school}
              onChange={(e) => handleChange(index, e)}
            />
            <label htmlFor={`floatingInput-school-${exp.id}`}>
              School/University
            </label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="text"
              name="degree"
              className="form-control"
              id={`floatingInput-degree-${exp.id}`}
              placeholder="Degree"
              value={exp.position}
              onChange={(e) => handleChange(index, e)}
            />
            <label htmlFor={`floatingInput-degree-${exp.id}`}>
              Degree Program
            </label>
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
        </div>
      ))}

      <div className="form-floating mt-3 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={addForm}>
          <span>Add Education</span>
        </button>
      </div>
    </div>
  );
};

export default FormEducation;
