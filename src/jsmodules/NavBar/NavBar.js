import ShopCart from '../shoppCart/shoppCart';
import './NavBar.css';


function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a className="li1" href=""><strong className="fatori">Fatori</strong> <strong className="it">IT</strong> <strong className="solutions">Solutions</strong></a>
                </li>
                <li><a className="li2" href="#">Home</a></li>
                <li><a className="li3" href="#">Servicios</a></li>
                <li><a className="li4" href="#">Sobre Nosotros</a></li>
                <ShopCart quantity={0} />
            </ul>
        </nav>
    )
}

export default NavBar;