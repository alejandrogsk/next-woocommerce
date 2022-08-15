import React, { useContext, useState } from 'react';
import CartItem from './cart-item';

import Link from 'next/link';
import { clearCart } from '../../utils/cart';
import { AppContext } from '../context/context';

const CartItemsContainer = () => {
	const [ cart, setCart ] = useContext( AppContext );
	const { cartItems, totalPrice, totalQty } = cart || {};
	const [ isClearCartProcessing, setClearCartProcessing ] = useState( false );
	
	// Clear the entire cart.
	const handleClearCart = ( event ) => {
		event.stopPropagation();
		
		if (isClearCartProcessing) {
			return;
		}
		
		clearCart( setCart, setClearCartProcessing );

	};
	
	return (
		<div >
			{ cart ? (
				<div >
					{/*Cart Items*/ }
					<div >
						{ cartItems.length &&
						cartItems.map( ( item ) => (
							<CartItem
								key={ item.product_id }
								item={ item }
								products={ cartItems }
								setCart={setCart}
							/>
						) ) }
					</div>
					
					{/*Cart Total*/ }
					<div >
						<h2>Cart Total</h2>
						<div>
							<p>Total({totalQty})</p>
							<p>{cartItems?.[0]?.currency ?? ''}{ totalPrice }</p>
						</div>
						
						<div>
							{/*Clear entire cart*/}
							<div >
								<button
									onClick={(event) => handleClearCart(event)}
									disabled={isClearCartProcessing}
								>
									<span>{!isClearCartProcessing ? "Clear Cart" : "Clearing..."}</span>
								</button>
							</div>
							{/*Checkout*/}
							<Link href="/checkout">
								<button>
			                  <span >
			                    Proceed to Checkout
			                  </span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			) : (
				<div >
					<h2>No items in the cart</h2>
					<Link href="/">
						<button >
			              <span >
			                Add New Products
			              </span>
						</button>
					</Link>
				</div>
			) }
		</div>
	);
};

export default CartItemsContainer;