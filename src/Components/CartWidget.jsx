import cart from "../assets/image/cart4.svg"

const CartWidget = () => {
    return (
        <>
            <button type="button" className="btn btn-primary position-relative">
        <img src={cart} alt="cartimg" width={24} />        
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          1
        </span>
      </button>
        </>
    )
}

export default CartWidget