import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useTranslation } from 'react-i18next';
import en_pdf from "../../Assets/CV_Koshelenko.pdf";
import ua_pdf from "../../Assets/Koshelenko.pdf";
import ru_pdf from "../../Assets/CV_Koshelenko_RU.pdf"; // Добавлена русская версия

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { t, i18n } = useTranslation();
  const [width, setWidth] = useState(1200);
  const [pdfPath, setPdfPath] = useState(null);
  
  const selectResume = (locale) => {
    let resumeFile;
    if (locale === "ua") {
      resumeFile = ua_pdf;
    } else if (locale === "ru") {
      resumeFile = ru_pdf;
    } else {
      resumeFile = en_pdf;
    }
    setPdfPath(resumeFile);
  };
  
  useEffect(() => {
    setWidth(window.innerWidth);
    const currentLocale = i18n.language;
    
    let resumeFile;
    if (currentLocale === "ua") {
      resumeFile = ua_pdf;
    } else if (currentLocale === "ru") {
      resumeFile = ru_pdf;
    } else {
      resumeFile = en_pdf;
    }

    setPdfPath(resumeFile);
  }, [i18n.language]);
  
  if (!pdfPath) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", zIndex: 100 }}>
          <Button 
            variant="primary"
            onClick={() => selectResume('en')}
            style={{ maxWidth: "250px", margin: "5px", position: "relative", zIndex: 101 }}
          >
            {t("select_en_resume")}
          </Button>
          <Button 
            variant="primary"
            onClick={() => selectResume('ua')}
            style={{ maxWidth: "250px", margin: "5px", position: "relative", zIndex: 101 }}
          >
            {t("select_ua_resume")}
          </Button>
          <Button 
            variant="primary"
            onClick={() => selectResume('ru')}
            style={{ maxWidth: "250px", margin: "5px", position: "relative", zIndex: 101 }}
          >
            {t("select_ru_resume")}
          </Button>
        </Row>
        <Row className="resume" style={{ position: "relative", zIndex: 50 }}>
          <Document 
            file={pdfPath} 
            className="d-flex justify-content-center"
            onLoadError={(error) => console.error('Ошибка загрузки PDF:', error, pdfPath)}
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", zIndex: 100, marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px", position: "relative", zIndex: 101 }}
          >
            <AiOutlineDownload />
            &nbsp;{t("download_cv")}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;