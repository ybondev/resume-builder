"use client";
import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return isNaN(date)
    ? dateString
    : date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
};

const DisplayInformation = ({ formData }) => {
  const pdfRef = useRef();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true); // Show "Generating..."

    setTimeout(async () => {
      const element = pdfRef.current;
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // Full A4 width
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = 10;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      while (position + imgHeight > pageHeight) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      }

      const pdfBlob = pdf.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl); // Set the PDF URL for preview
      setIsGenerating(false); // Hide "Generating..."
    }, 1000); // 1-second delay
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div ref={pdfRef} className="resume-preview">
        {/* Full Name - Only show if fullName exists */}
        {formData.fullName?.trim() && <h3>{formData.fullName}</h3>}

        {/* Personal Info - Only show if any field is present */}
        {(formData.email?.trim() ||
          formData.phone?.trim() ||
          formData.location?.trim()) && (
          <div className="resume-personal d-flex">
            {formData.email?.trim() && <p>{formData.email} | </p>}
            {formData.phone?.trim() && <p>{formData.phone} | </p>}
            {formData.location?.trim() && <p>{formData.location}</p>}
          </div>
        )}

        {/* Summary - Only show if it exists */}
        {formData.summary?.trim() && <p>{formData.summary}</p>}

        {/* Uploaded Picture */}
        <div className="resume-picture">
          {/* Display Profile Image if Available */}
          {formData.profileImage && (
            <Image
              src={formData.profileImage}
              alt="Profile"
              className="img-fluid"
              width={170}
              height={170}
            />
          )}
        </div>

        {/* Experience Section */}
        {formData.experience?.some(
          (exp) =>
            exp.company?.trim() ||
            exp.position?.trim() ||
            exp.startDate?.trim() ||
            exp.endDate?.trim() ||
            exp.jobDescription?.trim()
        ) && (
          <div className="resume-experience">
            <h4>Experience</h4>
            {formData.experience.map(
              (exp, index) =>
                (exp.company?.trim() ||
                  exp.position?.trim() ||
                  exp.startDate?.trim() ||
                  exp.endDate?.trim() ||
                  exp.jobDescription?.trim()) && (
                  <div key={index} className="resume-experience-item">
                    {exp.company?.trim() && <strong>{exp.company}</strong>}
                    {exp.position?.trim() && <p>{exp.position}</p>}
                    {(exp.startDate?.trim() || exp.endDate?.trim()) && (
                      <p>
                        {formatDate(exp.startDate)} -{" "}
                        {formatDate(exp.endDate) || "Present"}
                      </p>
                    )}
                    {exp.jobDescription?.trim() && <p>{exp.jobDescription}</p>}
                  </div>
                )
            )}
          </div>
        )}

        {/* Education Section */}
        {formData.education?.some(
          (edu) =>
            edu.school?.trim() ||
            edu.degree?.trim() ||
            edu.startDate?.trim() ||
            edu.endDate?.trim()
        ) && (
          <div className="resume-education">
            <h4>Education</h4>
            {formData.education.map(
              (edu, index) =>
                (edu.school?.trim() ||
                  edu.degree?.trim() ||
                  edu.startDate?.trim() ||
                  edu.endDate?.trim()) && (
                  <div key={index} className="resume-education-item">
                    {edu.school?.trim() && <strong>{edu.school}</strong>}
                    {edu.degree?.trim() && <p>{edu.degree}</p>}
                    {(edu.startDate?.trim() || edu.endDate?.trim()) && (
                      <p>
                        {formatDate(edu.startDate)} -{" "}
                        {formatDate(edu.endDate) || "Present"}
                      </p>
                    )}
                  </div>
                )
            )}
          </div>
        )}

        {/* Skills Section */}
        {formData.skills?.some((skill) => skill.skill?.trim()) && (
          <div className="resume-skills">
            <h4>Skills</h4>
            <ul>
              {formData.skills.map(
                (skill, index) =>
                  skill.skill?.trim() && (
                    <li key={index}>
                      <span>{skill.skill}</span>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}

        {/* Certificates Section */}
        {formData.certificates?.some(
          (cert) =>
            cert.certificate?.trim() ||
            cert.issuingOrganization?.trim() ||
            cert.date?.trim()
        ) && (
          <div className="resume-certificates">
            <h4>Certificates</h4>
            {formData.certificates.map(
              (cert, index) =>
                (cert.certificate?.trim() ||
                  cert.issuingOrganization?.trim() ||
                  cert.date?.trim()) && (
                  <div key={index} className="resume-certificates-item">
                    {cert.certificate?.trim() && (
                      <strong>{cert.certificate}</strong>
                    )}
                    {cert.issuingOrganization?.trim() && (
                      <p>{cert.issuingOrganization}</p>
                    )}
                    {cert.date?.trim() && <p>{formatDate(cert.date)}</p>}
                  </div>
                )
            )}
          </div>
        )}

        {/* Modal for Preview */}
        {pdfUrl && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">PDF Preview</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setPdfUrl(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <iframe src={pdfUrl} width="100%" height="700px" />
                </div>
                <div className="modal-footer"></div>
                <div className="modal-footer">
                  <button className="btn btn-primary" onClick={downloadPDF}>
                    Download PDF
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setPdfUrl(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HEREBY */}
        <div className="resume-hereby">
          <div className="txt text-center ">
            Hereby I declare that the information provided above is true to the
            best of my knowledge.
          </div>
        </div>
      </div>

      {/* Button to Generate PDF */}
      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-primary"
          onClick={generatePDF}
          disabled={isGenerating}
        >
          {isGenerating ? "Generating PDF..." : "Generate PDF"}
        </button>
      </div>
    </>
  );
};

export default DisplayInformation;
