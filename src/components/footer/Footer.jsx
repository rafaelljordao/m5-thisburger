
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
          <a href="">Home</a>
          <a href="">Quem Somos</a>
          <a href="">Cardápio</a>
          <a href="">Contato</a>
        </div>
        <div className="cardapio">
          <h2>cardápio</h2>
          <a href="">Burguers</a>
          <a href="">Bebidas</a>
          <a href="">Porções</a>
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