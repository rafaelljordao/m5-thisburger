import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
    <div className="footer-header">
      <p>saiba de todas as novidades e promoções!</p>
      <div className="cadastro">
        <input className="email" type="email" placeholder="Digite seu email"/>
        <input className="submit" type="submit"/>
      </div>
    </div>
    <div className="footer-main">
      <div className="links">
        <div className="institucional">
          <h2>institucional</h2>
          <Link to="">Home</Link>
          <Link to="">Quem Somos</Link>
          <Link to="">Cardápio</Link>
          <Link to="">Contato</Link>
        </div>
        <div className="cardapio-footer">
          <h2>cardápio</h2>
          <Link to="">Burguers</Link>
          <Link to="">Bebidas</Link>
          <Link to="">Porções</Link>
        </div>
      </div>
      <div className="social-media">

      </div>
    </div>
    <div className="rodape">
      <p>Hamburgueria This.burger 2022 - Todos os direitos reservados | Grupo 1</p>
    </div>
  </footer>
  )
}

export default Footer