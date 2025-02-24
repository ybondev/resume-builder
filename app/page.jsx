"use client";
import React, { useState } from "react";
import FooterBy from "./components/FooterBy";
import FormPersonal from "./components/FormPersonal";
import FormExperience from "./components/FormExperience";
import FormEducation from "./components/FormEducation";
import FormSkills from "./components/FormSkills";
import FormCertificate from "./components/FormCertificate";
import DisplayInformation from "./components/DisplayInformation";

const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: [
      {
        id: 1,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
      },
    ],
    education: [
      {
        id: 1,
        school: "",
        degreee: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [
      {
        id: 1,
        skill: "",
      },
    ],
    certificates: [
      {
        id: 1,
        certificate: "",
        issuingOrganization: "",
        date: "",
      },
    ],
  });
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-8 p-0">
              <h1 className="txt-title">
                BuildMyCV – Create Your Professional Resume in Minutes!
              </h1>
            </div>
            <div className="col-md-6 p-0">
              <span>
                BuildMyCV is your go-to online resume builder, designed to help
                you craft a polished, job-winning CV in just a few clicks.
                Whether you're a fresh graduate, a career switcher, or an
                experienced professional, our easy-to-use platform ensures your
                resume stands out.
              </span>
            </div>
          </div>
          <div className="row gy-3 mt-3">
            <div className="col-md-5 form">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    id="personal-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#personal"
                  >
                    Personal
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="experience-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#experience"
                  >
                    Experience
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="education-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#education"
                  >
                    Education
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="skills-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#skills"
                  >
                    Skills
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="certificates-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#certificates"
                  >
                    Certificates
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <FormPersonal formData={formData} setFormData={setFormData} />
                <div className="tab-pane fade" id="experience">
                  <FormExperience
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
                <div className="tab-pane fade" id="education">
                  <FormEducation
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
                <div className="tab-pane fade" id="skills">
                  <FormSkills formData={formData} setFormData={setFormData} />
                </div>
                <div className="tab-pane fade" id="certificates">
                  <FormCertificate
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              </div>
              <FooterBy />
            </div>
            <div className="col-md-7">
              <DisplayInformation formData={formData} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
