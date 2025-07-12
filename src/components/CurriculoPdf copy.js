import  styles  from './CurriculoPdf.module.css';
import html2pdf from "html2pdf.js";
import { useState,useRef, forwardRef } from 'react';

const CurriculoPdf = forwardRef(({
  nome, endereco, email, numero,
  objetivo, qualificacao, experiencia,
  formacao, cursos, idiomas, imageURL
}, ref) => {

    const conteudoRef = useRef(null);
    const [loading, setLoading] = useState(false);

     const gerarPDF = () => {    
        const novaAba = window.open('', '_blank');
        const opt = {
          margin: 0.2,
          filename: 'curriculo.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        //?
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
    
  return (
    <div>
      <div className={styles.conteudo} ref={conteudoRef}>
        <div className={styles.cabecalhoDecoracao}></div>

        {/* div do cabeçalho */}
        <div>
          <img className={styles.foto} src='https://images.unsplash.com/photo-1748392029321-58793571f850?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />

          <div className={styles.cabecalho}>
            <h1>Joao Antonio Santos Alves</h1>
            <p>Rua 11 de março, Nitinho da Madereira 327 <i className="fi fi-rr-marker"></i></p>
            <p>joaoantoniosantosalves1@gmai.com <i className="fi fi-rr-envelope"></i></p>
            <p>79 999043712 <i className="fi fi-rr-phone-call"></i></p>
          </div>
          {/* ---------------- */}
        </div>

        <div className={styles.secao}>
          <h3>Objetivo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis enim convallis nunc sodales accumsan. Pellentesque maximus sodales gravida. Praesent nunc ex, euismod nec arcu vel, egestas pharetra purus. Vivamus vulputate maximus ipsum vel aliquam. Curabitur bibendum mi tellus</p>
        </div>

        <div className={styles.secao}>
          <h3>Qualificação Profissional</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis enim convallis nunc sodales accumsan. Pellentesque maximus sodales gravida. Praesent nunc ex, euismod nec arcu vel, egestas pharetra purus. Vivamus vulputate maximus ipsum vel aliquam. Curabitur bibendum mi tellus</p>
        </div>

        <div className={styles.secao}>
          <h3>Experiência Profissional</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis enim convallis nunc sodales accumsan. Pellentesque maximus sodales gravida. Praesent nunc ex, euismod nec arcu vel, egestas pharetra purus. Vivamus vulputate maximus ipsum vel aliquam. Curabitur bibendum mi tellus</p>
        </div>

        <div className={styles.secao}>
          <h3>Formação</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis enim convallis nunc sodales accumsan. Pellentesque maximus sodales gravida. Praesent nunc ex, euismod nec arcu vel, egestas pharetra purus. Vivamus vulputate maximus ipsum vel aliquam. Curabitur bibendum mi tellus</p>
        </div>

        <div className={styles.secao}>
          <h3>Cursos adicionais</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis enim convallis nunc sodales accumsan. Pellentesque maximus sodales gravida. Praesent nunc ex, euismod nec arcu vel, egestas pharetra purus. Vivamus vulputate maximus ipsum vel aliquam. Curabitur bibendum mi tellus</p>
        </div>

        <div className={styles.secao}>
          <h3>Idiomas</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis enim convallis nunc sodales accumsan. Pellentesque maximus sodales gravida. Praesent nunc ex, euismod nec arcu vel, egestas pharetra purus. Vivamus vulputate maximus ipsum vel aliquam. Curabitur bibendum mi tellus</p>
        </div>
      </div>
      {/* <button type="button" onClick={gerarPDF} disabled={loading}>
        {loading ? 'Gerando PDF...' : 'Gerar PDF'}
      </button> */}
    </div>
  );
});

export default CurriculoPdf;
