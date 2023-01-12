import "./styles.css" 
import imagen from './img/portada.png'
import logo from './img/logo.png'

export default function Header() {

    return (
        <>
        <header>
            <div>
                <img src={imagen} alt="portada" />
                <img className="logo" src={logo} alt="logo" />
            </div>
        </header>
        </>
    );
}