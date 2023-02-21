import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({itm}) => {
  const navigate = useNavigate()
  const showDetail=()=>{
    navigate(`/product/${itm.id}`)
  }
  return (
    <div className='card' onClick={showDetail}>  
        <img src={itm?.img} alt="" />
        <div>Conscious choice</div>
        <div>{itm?.title}</div>
        <div>₩{itm?.price}원</div>
        <div>
            {
                itm?.new == true ? '신제품' : ''
            }
        </div>
    </div>
  )
}

export default ProductCard
