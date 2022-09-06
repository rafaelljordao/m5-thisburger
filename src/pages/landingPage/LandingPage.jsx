import Footer from '../../components/footer/Footer'
import './landingPage.css'

export const LandingPage = () => {
    return (
        <div className='lp'>
            <div className='lpDiv1'>
                <div className='lpSection1'>
                    <h1 className='title-section1'>This.Burger</h1>
                    <h4 className='subtitle-section1'>PEÇA DE QUALQUER LUGAR</h4>
                    <img src="src/assets/thisburger-logo.jpg" className='logo-section1'/>
                    <img src="src/assets/arrow-lpsection1.jpg" className='arrowSection1' />
                </div>
            </div>

            <div className='lpDiv2'>
                <div className='lpSection2'>
                    <img src="src/assets/b3-lpsection2.jpg" className='imageSection2'/>
                </div>
            </div>

            <div className='lpDiv3'>
                <div className='lpSection3'>
                    {/* <img src="src/assets/BACK-BACON.gif" className='imageSection3'/> */}
                    <img src="src/assets/promo-bb-lpsection3.jpg" className='imageSection3'/>
                </div>
            </div>

            <div className='lpDiv4'>
                <div className='lpSection4'>
                    <img src="src/assets/thisburger-map.jpg" className='imageSection4'/>
                </div>
            </div>
        </div>
    )
}