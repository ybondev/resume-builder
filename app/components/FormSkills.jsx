import React from "react";

const FormSkills = ({ formData, setFormData }) => {
  const addForm = () => {
    setFormData({
      ...formData,
      skills: [
        ...formData.skills,
        {
          id: formData.skills.length + 1,
          skill: "",
        },
      ],
    });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...formData.skills];
    updatedSkills[index][name] = value;
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  return (
    <div className="tab-pane fade show active" id="skills">
      <div className="txt-skills my-3">Skills</div>

      {formData.skills.map((exp, index) => (
        <div key={exp.id} className="form-floating mb-3">
          <input
            type="text"
            name="skill"
            className="form-control"
            id={`floatingInput-skill-${exp.id}`}
            placeholder="Skill"
            value={exp.skill} // Fixed the value reference
            onChange={(e) => handleChange(index, e)}
          />
          <label htmlFor={`floatingInput-skill-${exp.id}`}>Skill</label>
        </div>
      ))}

      {/* Add Skill Button */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-primary" type="button" onClick={addForm}>
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default FormSkills;
