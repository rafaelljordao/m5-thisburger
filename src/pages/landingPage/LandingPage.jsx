import "./landingPage.css";

export const LandingPage = () => {

  return  (
    
    <div className="lp">
      <div className="lpDiv1">
        <div className="lpSection1">
          <h6>NO BURGER LIKE</h6>
          <h1 className="title-section1">This.Burger</h1>
          <h4 className="subtitle-section1">PEÇA DE QUALQUER LUGAR</h4>
          <img src="src/assets/thisburger-logo.jpg" className="logo-section1" />
          <a href="#promo">
            <img
              src="src/assets/arrow-lpsection1.jpg"
              className="arrowSection1"
            />
          </a>
        </div>
      </div>

      <div className="lpDiv2">
        <div className="lpSection2">
          <img src="src/assets/b3-lpsection2.jpg" className="imageSection2" />
        </div>
      </div>

      <div className="lpDiv3">
        <div className="lpSection3">
          <img
            src="src/assets/promo-bb-lpsection3.jpg"
            id="promo"
            className="imageSection3"
          />
        </div>
      </div>

      <div className="lpDiv4">
        <h2>WHERE location LIKE This.Burger</h2>
        <div className="lpSection4">
          <img
            id="maps"
            src="src/assets/thisburger-map.jpg"
            className="imageSection4"
          />
        </div>
      </div>
    </div>
  );
};
