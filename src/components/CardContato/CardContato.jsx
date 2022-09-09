import "./CardContato.css";

export const CardContato = (props) => {
  return (
    <div className="card">
      <img className="imagem" src={props.imagem} />
      <p className="nome">{props.nome}</p>
      <div className="icones">
        <a href={props.linkedinRef} target="_blank">
          {props.linkedin}
        </a>
        <a href={props.githubRef} target="_blank">
          {props.github}
        </a>
      </div>
    </div>
  );
};
