import { Link, Outlet, } from "react-router-dom";
import "./navbar.css" 
import { FaShoppingCart } from "react-icons/fa";
export default function NavBar() {

    return (
        <>
        <nav>
            <ul>
                <li><Link to='/' >Mis Yulian's</Link></li>
                <li><Link to='/' >Inicio</Link></li>
                <li><Link to='/Productos' >Productos</Link></li>
                <li><Link to='/CarroCompras' ><FaShoppingCart/></Link></li>
            </ul>
        </nav>
        <div>
        <Outlet/>
        </div>
        </>
    );
}