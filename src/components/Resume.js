import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from "../assets/resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = resume;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">

        <div
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Button variant="primary" href={resumeLink} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </div>

        <Row className="resume">
          <Document file={resumeLink}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <div
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Button variant="primary" href={resumeLink} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </div>
      </Container>
    </div>
  );
}
export default ResumeNew;