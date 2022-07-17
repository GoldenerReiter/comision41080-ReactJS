import colourRandomizer from "../ColourRandomizer/colourRandomizer";

function ShopCart(quantity) {
    return (
        <li><a className="li5" href="#">Carrito <span styles={colourRandomizer()}>({quantity.quantity})</span></a></li>
    )
}

export default ShopCart;