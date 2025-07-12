import "./CurriculoForm.css";
import { useState, useRef, useEffect } from "react";
import html2pdf from "html2pdf.js";
import CurriculoPdf from "./CurriculoPdf";

const CurriculoForm = () => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [qualificacao, setQualificacao] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [formacao, setFormacao] = useState("");
  const [cursos, setCursos] = useState("");
  const [idiomas, setIdiomas] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [elements, setElements] = useState(null);
  const [validar, setValidar] = useState(false);
  const [loading, setLoading] = useState();
  
  const conteudoRef = useRef();
  
  const gerarPDF = () => {
    setLoading(true);

    const novaAba = window.open('', '_blank');

    //configurações da pagina
    const opt = {
      margin: [-0.1, 0.1, 0.1, 0.1],
      filename: 'curriculo.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // aqui aonde é feita a selecao da pagina aonde será gerado o pdf
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

  const handlePdf = () => {

    setValidar(true);

    setElements({
      nome,
      endereco,
      email, 
      numero,
      objetivo,
      qualificacao, 
      experiencia, 
      formacao, 
      cursos, 
      idiomas, 
      imageURL,
      validar
  });

  gerarPDF();
  }


  useEffect(() => {
    console.log(elements);
  },[elements])
 
  return (
    <>
    <div className="body">
      <div>
      <h2 style={{ fontWeight: '300' }}>Digite aqui</h2>
      <form>
        <label>
          <span>Infomações Pessoais</span>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
          <input
            type="text"
            placeholder="Digite seu endereço"
            onChange={(e) => setEndereco(e.target.value)}
            value={endereco}
          />
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="number"
            placeholder="Digite seu número"
            onChange={(e) => setNumero(e.target.value)}
            value={numero}
          />
        </label>
        <label>
          <span>Dados Profissionais</span>
          <input
            type="text"
            placeholder="Objetivo"
            onChange={(e) => setObjetivo(e.target.value)}
            value={objetivo}
          />
          <input
            type="text"
            placeholder="Qualificação Profissional"
            onChange={(e) => setQualificacao(e.target.value)}
            value={qualificacao}
          />
          <input
            type="text"
            placeholder="Experiência Profissional"
            onChange={(e) => setExperiencia(e.target.value)}
            value={experiencia}
          />
          <input
            type="text"
            placeholder="Formação"
            onChange={(e) => setFormacao(e.target.value)}
            value={formacao}
          />
          <input
            type="text"
            placeholder="Cursos adicionais"
            onChange={(e) => setCursos(e.target.value)}
            value={cursos}
          />
          <input
            type="text"
            placeholder="Idiomas"
            onChange={(e) => setIdiomas(e.target.value)}
            value={idiomas}
          />
           <label htmlFor="photo" style={{ cursor: "pointer", background: "#007bff", color: "#fff", padding: "8px 12px", borderRadius: "5px" }}>
          📁 Escolher arquivo
          </label>
          <input
           id="photo"
           type="file"
           style={{ display: "none" }}
           onChange={(e) => 
            {
              const file = 
              setImageURL(URL.createObjectURL(e.target.files[0]))}}
          />
           <button type="button" onClick={handlePdf}>
            Baixar PDF
           </button>
        </label>
      </form>
      </div>
      {/* ----------------------------------------------------------------- */}
     <div>
     <h2 style={{ fontWeight: '300' }}>Seu Curriculo</h2>
     <div className="conteudo">
        <div className="cabecalho-decoracao"></div>
          {/* div do cabeçalho */}
        <div >
        <img className="foto" src={imageURL} alt=""/>
        
          <div className="cabecalho">         
            <h1>{nome || "Seu Nome"}</h1>
            <p>{endereco || "Endereço "} <i class="fi fi-rr-marker"></i></p>
            <p>{email || "Email "}  <i class="fi fi-rr-envelope"></i></p>
            <p>{numero || "Numero "} <i class="fi fi-rr-phone-call"></i></p>
          </div>
          {/* ---------------- */}
        </div>

        <div className="secao">
          <h3>Objetivo</h3>
          <p>{objetivo}</p>
        </div>

        <div className="secao">
          <h3>Qualificação Profissional</h3>
          <p>{qualificacao}</p>
        </div>

        <div className="secao">
          <h3>Experiência Profissional</h3>
          <p>{experiencia}</p>
        </div>

        <div className="secao">
          <h3>Formação</h3>
          <p>{formacao}</p>
        </div>

        <div className="secao">
          <h3>Cursos adicionais</h3>
          <p>{cursos}</p>
        </div>

        <div className="secao">
          <h3>Idiomas</h3>
          <p>{idiomas}</p>
        </div>
      </div>
     </div>
    </div>

    <CurriculoPdf  ref={conteudoRef} elements={elements}/>
    </>
  );
};

export default CurriculoForm;
