import { useContext, useState } from 'react'
import { addToCart } from '../../utils/cart/addToCart'
import { AppContext } from '../context/context';


const AddToCart = ({product}) => {
  const [ cart, setCart ] = useContext(AppContext)
  const [ isAddedToCart, setIsAddedToCart ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const handleBtn = () => {
    addToCart(product.id, 1, setCart, setIsAddedToCart, setLoading)
  }

  return (
    <button onClick={handleBtn} disabled={loading}>
      {
        !loading ? 'AddToCart' : 'Loading...'
      }
    </button>
  )
}

export default AddToCart