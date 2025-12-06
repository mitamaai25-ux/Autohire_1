import React, { useRef } from 'react';
import Slide from '../ui/Slide';
import './presentation.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const slides = [
  {
    title: "Splash Screen",
    desc: "Introduces the AutoHire brand with a clean gradient and centered logo to reinforce identity.",
    img: "/assets/splash.png"
  },
  {
    title: "Login Screen",
    desc: "A minimal and intuitive login interface offering multiple secure authentication options.",
    img: "/assets/login.png"
  },
  {
    title: "Dashboard",
    desc: "Displays personalized recommendations, quick actions, and clean navigation for efficient flows.",
    img: "/assets/dashboard.png"
  },
  {
    title: "Job Cards",
    desc: "Structured job listings with hierarchy to improve readability and quick scanning for users.",
    img: "/assets/jobcards.png"
  },
  {
    title: "Freelancer Profile",
    desc: "A detailed talent profile with skills, portfolio, rating, and key actions (Hire, Chat, Save).",
    img: "/assets/profile.png"
  },
  {
    title: "Chat UI",
    desc: "Modern communication design with message clarity, file sharing, and quick reply options.",
    img: "/assets/chat.png"
  },
  {
    title: "Full Flow Overview",
    desc: "A complete visual overview of all app screens aligned in a single frame for UX understanding.",
    img: "/assets/fullflow.png"
  }
];

export default function Presentation() {
  const containerRef = useRef(null);

  const downloadPDF = async () => {
    const element = containerRef.current;
    if (!element) return;

    // Try to render the element using html2canvas
    try {
      // we capture the whole container as one tall image
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4'
      });

      // scale the canvas image to fit PDF width
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // If the content height exceeds one page, split into pages
      let position = 0;
      let remainingHeight = pdfHeight;
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      remainingHeight -= pageHeight;
      position -= pageHeight;

      // Add more pages if needed
      while (remainingHeight > -1) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        remainingHeight -= pageHeight;
        position -= pageHeight;
      }

      pdf.save('AutoHire_UI_UX_Presentation.pdf');
    } catch (err) {
      console.error("PDF generation failed", err);
      alert("Sorry — PDF generation failed. Make sure images are accessible (CORS) and retry.");
    }
  };

  return (
    <div className="presentation-root">
      <div className="controls">
        <button className="btn-primary" onClick={downloadPDF}>Download PDF</button>
      </div>

      <div className="slides-container" ref={containerRef}>
        {slides.map((s, idx) => (
          <Slide key={idx} index={idx + 1} title={s.title} desc={s.desc} img={s.img} />
        ))}
      </div>
    </div>
  );
}


