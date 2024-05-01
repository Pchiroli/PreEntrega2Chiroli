import ItemCarts from "./item";



const ItemListGroup = ({items}) => {
    return (
        <>
                {items.map(product => (
                <ItemCarts key={product.id} item={product} />
                ))}
        </>
    )
}

export default ItemListGroup;