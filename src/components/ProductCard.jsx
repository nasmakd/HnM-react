//상품을 눌렀을때 그 상품에 해당하는 디테일 페이지로 넘어가게
import React from 'react';
import { useNavigate } from "react-router-dom"; 
import './ProductCard.scss';

export const ProductCard = ({item}) => {
  const aaa = useNavigate();
  const showDetail = ()=>{
    aaa(`/product/${item.id}`); 
  }

  return (
    <div className='productCard'>
      <div className='img-container' onClick={showDetail}>
        <img src= {item?.img} alt= {item?.title} />
        <div className="item_box">
          {item?.choice === true ? (<div className='event'>Weekly Best Seller</div>) : ""}
          {item?.new === true ? (<div className='new' >New</div>) : ""}
        </div>
      </div>
      <div className='title' >{item.title}</div>
      <div className='price'>₩{item.price}</div>
    </div>
  )
}
