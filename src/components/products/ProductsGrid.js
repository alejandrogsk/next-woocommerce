import React from 'react'
import ProductCard from './ProductCard'

const ProductsGrid = ({products}) => {
    
  return (
        <div className="products__grid">
            {
                products?.map((prod) => (
                    <ProductCard key={prod.id} product={prod}/>
                ))
            }
        </div>
    )
}

export default ProductsGrid