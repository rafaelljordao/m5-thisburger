import './Loading.css'
import loadingBurger from '../../assets/loadingBurger.png'

export default function LoadingSpinner() {
    return(
        <div className="loadingContainer">
            <div className="loadingSpinner">
                <img src={loadingBurger} alt="" />
            </div>
        </div>
    )
}