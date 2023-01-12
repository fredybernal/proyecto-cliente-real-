import "./styles.css" 
import logo from './img/logo.png'

export default function Footer() {

    return (
        <>
        <footer>
                <img className="logo-footer" src={logo} alt="logo" />
        </footer>
        </>
    );
}