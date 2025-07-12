import  styles  from '../components/CurriculoPdf.module.css';
import { useState, useRef } from 'react';
import html2pdf from "html2pdf.js";


export const useGerarPdf = (conteudoRef) => {
  const [loading, setLoading] = useState();

  const gerarPDF = () => {
    if(!conteudoRef.current) {
      console.warn("Ref não encontrado");
      return;
    }

    setLoading(true);

    const novaAba = window.open('', '_blank');

    const opt = {
      margin: 0.2,
      filename: 'curriculo.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(conteudoRef.current).outputPdf('bloburl').then((pdfUrl) => {
      if (novaAba) {
        novaAba.location.href = pdfUrl;
      } else {
        alert('Por favor, habilite pop-ups para visualizar o PDF.');
      }
      window.open(pdfUrl, '_blank');
      setLoading(false);
    });

  };

  return {gerarPDF, loading};  
};

