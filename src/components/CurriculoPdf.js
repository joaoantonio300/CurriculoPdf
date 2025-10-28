import styles from "./CurriculoPdf.module.css";
import { useState, useRef, useEffect, forwardRef } from "react";

const CurriculoPdf = forwardRef(({ elements }, ref) => {
  const {
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
    validar,
  } = elements || {};

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(elements + "Aqui é no props");
  }, [elements]);

  return (
    <div className={styles.dad_content}>
      <div className={styles.conteudo} ref={ref}>
        <div className={styles.cabecalhoDecoracao}></div>

        <div>
          <img
            className={styles.foto}
            src={imageURL != null ? imageURL : ""}
            alt=""
          />

          <div className={styles.cabecalho}>
            <h1>{nome != null ? nome : "Nome"}</h1>
            <p>
              {endereco != null ? endereco : "Endereço"}
              <i className="fi fi-rr-marker"></i>
            </p>
            <p>
              {email != null ? email : "Email"}{" "}
              <i className="fi fi-rr-envelope"></i>
            </p>
            <p>
              {numero != null ? numero : "Numero"}
              <i className="fi fi-rr-phone-call"></i>
            </p>
          </div>
        </div>

        <div className={styles.secao}>
          <h3>Objetivo</h3>
          <p>{objetivo != null ? objetivo : "Digite aqui seus objetivos"}</p>
        </div>

        <div className={styles.secao}>
          <h3>Qualificação Profissional</h3>
          <p>
            {qualificacao != null
              ? qualificacao
              : "Digite aqui suas qualificações"}
          </p>
        </div>

        <div className={styles.secao}>
          <h3>Experiência Profissional</h3>
          <p>
            {experiencia != null
              ? experiencia
              : "Digite aqui suas experiências profissionais"}
          </p>
        </div>

        <div className={styles.secao}>
          <h3>Formação</h3>
          <p>
            {formacao != null
              ? formacao
              : "Digite aqui suas formações em andamento ou concluidas"}
          </p>
        </div>

        <div className={styles.secao}>
          <h3>Cursos adicionais</h3>
          <p>
            {cursos != null ? cursos : "Digite aqui seus cursos realizados"}
          </p>
        </div>

        <div className={styles.secao}>
          <h3>Idiomas</h3>
          <p>
            {idiomas != null ? idiomas : "Digite aqui seus idiomas aprendidos"}
          </p>
        </div>
      </div>
    </div>
  );
});

export default CurriculoPdf;
