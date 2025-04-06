import { useEffect } from 'react'
import { useProductsState } from '../../store/products/productStore'
import CarouselItem from '../carousel/CarouselItem'

function SimilarProduct() {
    const {products , getAllProduct} = useProductsState()
useEffect(()=>{
    getAllProduct()
} ,[])
const limitProduct = products.slice(50,52)

  return (
    <div className='mt-12'>
        <h1 className='text-2xl text-pink-700'>
            Similar Product</h1>
            {/* === carousel === */}
            <div className='hide-scrollbar flex overflow-x-scroll '>
               {limitProduct.map(product=>(
                <CarouselItem {...product} key={product.id} />
               ))}
            </div>
        </div>
  )
}

export default SimilarProduct