import jsPDF from "jspdf";

export function downloadReport(analysis) {
  const pdf = new jsPDF();
  
    pdf.setFontSize(18);

      pdf.text(
          "AI Career Twin Report",
              20,
                  20
                    );

                      pdf.setFontSize(12);

                        pdf.text(
                            `Resume Score: ${analysis.score}`,
                                20,
                                    40
                                      );

                                        pdf.save("career-report.pdf");
                                        }