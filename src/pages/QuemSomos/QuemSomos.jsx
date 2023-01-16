import { CardContato } from "../../components/CardContato/CardContato";
  import { FaLinkedin } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";
import imageLucas from "../../assets/lucaspassos.jfif";
import imageFlavio from "../../assets/flaviochristovam.jpeg";
import imageFernando from "../../assets/fernandopatrick.jpeg";
import imageRafael from "../../assets/rafaeljordao.jfif";
import imageJoao from "../../assets/joaopaulo.jpg";
import logo from "../../assets/logo.png";
import "./QuemSomos.css";

export const QuemSomos = () => {
  return (
    <div className="quemsomos">
      <div className="titulo">
        <h2>No Burger Like This.Burger</h2>
        <img className="logo" src={logo} />
      </div>
      <div className="contatos">
        <CardContato
          className="card"
          imagem={imageFlavio}
          nome="Flávio Christovam"
          linkedin={<FaLinkedin />}
          linkedinRef="https://www.linkedin.com/in/flavio-christovam/"
          github={<FaGithub />}
          githubRef="https://github.com/fchristovam"
        />
        <CardContato
          imagem={imageFernando}
          nome="Fernando Patrick"
          linkedin={<FaLinkedin />}
          linkedinRef="https://www.linkedin.com/in/fernandopatrick/"
          github={<FaGithub />}
          githubRef="https://github.com/FernandoPatrick"
        />
        <CardContato
          imagem={imageJoao}
          nome="João Paulo Gotardi"
          linkedin={<FaLinkedin />}
          linkedinRef="https://www.linkedin.com/in/joaopgbegiato/"
          github={<FaGithub />}
          githubRef="https://github.com/Joao-P-G-Begiato"
        />
        <CardContato
          imagem={imageLucas}
          nome="Lucas Passos"
          linkedin={<FaLinkedin />}
          linkedinRef="https://www.linkedin.com/in/lucas--passos/"
          github={<FaGithub />}
          githubRef="https://github.com/LucasBinho"
        />

        <CardContato
          imagem={imageRafael}
          nome="Rafael Jordão"
          linkedin={<FaLinkedin />}
          linkedinRef="https://www.linkedin.com/in/rafaelljordao/"
          github={<FaGithub />}
          githubRef="https://github.com/rafaelljordao"
        />
      </div>
    </div>
  );
};
