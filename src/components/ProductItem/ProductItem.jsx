import React from 'react'
import "./ProductItem.css";
import Button from "../Button/Button"

export default function ProductItem({product, className, onAdd}) {
  const onAddHandler = () => {
    onAdd(product);
  }
  return (
    <div className={'product' + className}>
      <div className={'img'} />
      <div className={'title'}>{product.name}</div>
      <div className={'size'}>Розмір рослини: {product.size}</div>
      <div className={'price'}>
        <span>Вартість: <b>{product.price}</b></span>
      </div>
      <Button className={'add-btn'} onClick={onAddHandler}>Додати до кошика</Button>
        
    </div>
  )
}
