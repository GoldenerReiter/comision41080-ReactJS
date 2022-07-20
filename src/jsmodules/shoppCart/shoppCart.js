import colourRandomizer from "../ColourRandomizer/colourRandomizer";

function ShopCart(prop) {
    return (
        <li><a className="li5" href="#">Carrito <span styles={colourRandomizer()}>({prop.quantity})</span></a></li>
    )
}

export default ShopCart;