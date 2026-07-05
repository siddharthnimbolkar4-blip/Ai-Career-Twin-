import pdfToText from 'react-pdftotext';
import mammoth from 'mammoth';

export async function parseResume(file) {
  // TXT
  if (file.type === 'text/plain') {
    return await file.text();
  }

  // DOCX
  if (
    file.type ===
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    const buffer = await file.arrayBuffer();

    const result = await mammoth.extractRawText({
      arrayBuffer: buffer,
    });

    return result.value;
  }

  // PDF
  if (file.type === 'application/pdf') {
    try {
      const text = await pdfToText(file);
      return text;
    } catch (error) {
      console.error('PDF Error:', error);
      throw new Error('Could not read PDF');
    }
  }

  throw new Error('Unsupported file type');
}
