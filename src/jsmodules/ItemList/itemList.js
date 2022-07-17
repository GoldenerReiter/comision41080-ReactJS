import './ItemList.css';

function ItemList(prop) {
    return (
        <div className="itemList">
            <p>
                {prop.text}
            </p>
        </div>
    )
}

export default ItemList;