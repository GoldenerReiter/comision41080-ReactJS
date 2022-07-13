import './NavBar.css'


function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a class="li1" href="#"><strong class="fatori">Fatori</strong> <strong class="it">IT</strong> <strong class="solutions">Solutions</strong></a>
                </li>
                <li><a class="li2" href="#">Home</a></li>
                <li><a class="li3" href="#">Servicios</a></li>
                <li><a class="li4" href="#">Sobre Nosotros</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;