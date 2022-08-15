
import { CART_ENDPOINT } from "../endpoints";
import { getApiCartConfigHeaders } from "./getApiCartConfigHeaders";
import { getSession, storeSession } from "./session";


export const addToCart = async ( productId, qty=1, setCart, setIsAddedToCart, setLoading ) => {
 
    setLoading(true)


    //get session if exist, else create one
    const storedSession = getSession();
    //add or view cart config
    const addOrViewCartConfig = getApiCartConfigHeaders();

    const requestOptions = {
        method: 'POST',
        headers: addOrViewCartConfig,
        body: JSON.stringify({ product_id: productId, quantity: qty })
    };
    
    try {
        const addToCartReq = await fetch( CART_ENDPOINT, requestOptions )
        const data = await addToCartReq.json();
        
        if(!storedSession) {
            storeSession(addToCartReq.headers?.get('x-wc-session'))
        }
        setIsAddedToCart(true)
        setLoading(false)
        await viewCart(setCart)
    } catch (error) {
        console.log('error', error.message)
        setLoading(false)
    }

}


export const viewCart = async ( setCart, setProcessing = () => {} ) => {
	
	const addOrViewCartConfig = getApiCartConfigHeaders();

    try {
        const req = await fetch( CART_ENDPOINT, { headers:addOrViewCartConfig } )
        const formatedRes = await req.json();
        console.log('formatedRes',formatedRes)

        const formattedCartData = getFormattedCartData(formatedRes ?? []);
        console.log("formattedCartData",formattedCartData)

        setCart( formattedCartData );
        setProcessing(false);
    } catch (error) {
        console.log("Error catched: ",error.message)
        setProcessing(false);
    }
};




export const updateCart = async ( cartKey, qty = 1, setCart, setUpdatingProduct ) => {
	
	const addOrViewCartConfig = getApiCartConfig();
	setUpdatingProduct(true);

    const requestOptions = {
        method: 'PUT',
        headers: addOrViewCartConfig,
        body: JSON.stringify({ quantity: qty })
    }; 

    try{
        await fetch(`${CART_ENDPOINT}/${cartKey}`, requestOptions);
        viewCart( setCart, setUpdatingProduct )

    }catch(e){
        setUpdatingProduct(false);
    }
};








const getFormattedCartData = ( cartData ) => {
	if ( ! cartData.length ) {
		return null;
	}
	const cartTotal = calculateCartQtyAndPrice( cartData || [] );
	return {
		cartItems: cartData || [],
		...cartTotal,
	};
};

const calculateCartQtyAndPrice = ( cartItems ) => {
	const qtyAndPrice = {
		totalQty: 0,
		totalPrice: 0,
	}
	
	if ( !cartItems?.length ) {
		return qtyAndPrice;
	}
	
	cartItems.forEach( (item, index) => {
		qtyAndPrice.totalQty += item?.quantity ?? 0;
		qtyAndPrice.totalPrice += item?.line_total ?? 0;
	} )
	
	return qtyAndPrice;
}
