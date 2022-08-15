import Link from 'next/link'
import React from 'react'
import Image from '../../components/images/Image';
import AddToCart from '../cart/AddToCart';



const ProductCard = ({product}) => {

  const productType = product?.type ?? '';



  return (
    <div className="products__card">      
        <Image 
          sourceUrl={product.images?.[0].src}
          altText={product.images?.[0].alt}
          title={product.name}
          width={380}
          height={380}
        />
        <div className="products__card-content">
          <h3>{product.name}</h3>
          <span>{product.price}</span>
        </div>
        <span>{(product.regular_price !== product.price) && `Regular price${product.regular_price}` }</span>
        {
          'simple'=== productType ? <AddToCart product={product} /> : null
        }
    </div>
  )
}

export default ProductCard