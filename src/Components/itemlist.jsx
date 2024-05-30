import Item from "./item"


const ItemList = ({items}) => {
    return (
        <>
                {items.map(product => (
                <Item key={product.id} item={product} />
                ))}
        </>
    )
}

export default ItemList;