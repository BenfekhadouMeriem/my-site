import jsPDF from 'jspdf';
import { Answer } from '../+types/root';

export const generateCVpdf = (answers: Answer[], photoFile: File | null) => {
  const doc = new jsPDF();
  let y = 10;
  const PAGE_HEIGHT = 297;

  const checkPageBreak = (space = 10) => {
    if (y + space >= PAGE_HEIGHT - 20) {
      doc.addPage();
      y = 20;
    }
  };

  const getAnswer = (id: string) =>
    answers.find((a) => a.question.id === id)?.response || "";

  const fullName = getAnswer("b_html_2");
  const city = getAnswer("b_html_3");
  const phone = getAnswer("b_html_4");
  const email = getAnswer("b_html_5");
  const summary = getAnswer("b_css_1");
  const education = getAnswer("b_js_1");
  const experience = getAnswer("b_react_1");
  const skills = getAnswer("b_gen_1").split(",");
  const languages = getAnswer("b_gen_2").split(",");
  const interests = getAnswer("b_gen_3").split(",");
  const website = getAnswer("b_html_6");
  const linkedin = getAnswer("b_html_7");
  const photoAnswer = getAnswer("b_html_1");

  const optionalAnswers = answers.filter((a) =>
    a.question.id.startsWith("optional_")
  );
  const additionalInfo = optionalAnswers
    .map((a) => {
      const sectionTitle = a.question.id
        .replace("optional_", "")
        .replace(/^\w/, (c) => c.toUpperCase());
      return `${sectionTitle}:\n• ${a.response}`;
    })
    .join("\n\n");

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const drawSectionHeader = (label: string) => {
    checkPageBreak(20);
    y += 8;

    const accent = [108, 76, 159]; // #6C4C9F
    const lightPurple = [229, 218, 240]; // #E5DAF0

    doc.setDrawColor(accent[0], accent[1], accent[2]);
    doc.setFillColor(lightPurple[0], lightPurple[1], lightPurple[2]);
    doc.rect(20, y - 5, 170, 10, "F");

    doc.setLineWidth(0.5);
    doc.line(20, y + 5, 190, y + 5);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(accent[0], accent[1], accent[2]);
    doc.text(label.toUpperCase(), 22, y + 3);

    y += 10;
    doc.setTextColor(0, 0, 0);
  };

  const generatePDF = () => {
    doc.setFillColor(229, 218, 240);
    doc.rect(0, 0, 210, 20, "F");

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    doc.text(`${city}     |     ${phone}     |     ${email}`, 105, 8, {
      align: "center",
    });

    if (website || linkedin) {
      const extra = [website, linkedin].filter(Boolean).join("     |     ");
      doc.text(extra, 105, 15, { align: "center" });
    }

    y = 30;

    const nameY = 25 + 40 / 2 + 5;
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(fullName, 70, nameY);
    y = 70;

    drawSectionHeader("Career Objective");
    const summaryLines = doc.splitTextToSize(summary, 170);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(summaryLines, 22, y);
    y += summaryLines.length * 6;

    drawSectionHeader("Core Qualifications");
    skills.forEach((skill) => {
      doc.text(`• ${capitalize(skill.trim())}`, 25, y);
      y += 6;
    });

    drawSectionHeader("Work Experience");
    const experienceItems = experience.split(",");
    experienceItems.forEach((exp) => {
      const lines = doc.splitTextToSize(`• ${exp.trim()}`, 170);
      lines.forEach((line: string) => {
        checkPageBreak(6);
        doc.text(line, 25, y);
        y += 6;
      });
    });

    drawSectionHeader("Education");
    const educationItems = education.split(",");
    educationItems.forEach((edu) => {
      const lines = doc.splitTextToSize(`• ${edu.trim()}`, 170);
      lines.forEach((line: string) => {
        checkPageBreak(6);
        doc.text(line, 25, y);
        y += 6;
      });
    });

    drawSectionHeader("Languages");
    languages.forEach((lang) => {
      doc.text(`• ${capitalize(lang.trim())}`, 25, y);
      y += 6;
    });

    drawSectionHeader("Interests");
    interests.forEach((i) => {
      doc.text(`• ${capitalize(i.trim())}`, 25, y);
      y += 6;
    });

    if (additionalInfo && additionalInfo.trim() !== "") {
      drawSectionHeader("Additional Info");
      const lines = doc.splitTextToSize(additionalInfo, 160);
      lines.forEach((line: string) => {
        checkPageBreak(6);
        doc.text(line, 25, y);
        y += 6;
      });
    }

    doc.save("CV.pdf");
  };

  if (photoAnswer && photoFile) {
    const img = new Image();
    img.src = URL.createObjectURL(photoFile);
    img.onload = () => {
      doc.addImage(img, "PNG", 20, 25, 40, 40);
      generatePDF();
    };
  } else {
    generatePDF();
  }
};
