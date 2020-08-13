import React,{useContext} from 'react';
import { CartContext } from "../contexts/CartContext"

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {

	const {cart, setCart} = useContext(CartContext)

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	const deleteItem = (id) => {
      setCart(cart.filter((item) => item.id !== id))
    }

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} deleteItem={deleteItem} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
