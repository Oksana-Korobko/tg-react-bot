import React, { useCallback, useState } from 'react'; 
import './ProductList.css';
// import products from '../../flowers.json'
import ProductItem from '../ProductItem/ProductItem'
import useTelegram from '../../hooks/useTelegram'

const products = [
  {
      "id": 101,
      "name": "Калла Captain Caruso",
      "url": "https://florium.ua/media/catalog/product/cache/2/file/9df78eab33525d08d6e5fb8d27136e95/c/a/calla_captain_caruso.jpg",
      "price": 120,
      "size": "14/16",
      "count": 5
  },
  {
      "id": 102,
      "name": "Лілія Duo Star",
      "url": "https://florium.ua/media/catalog/product/cache/2/file/9df78eab33525d08d6e5fb8d27136e95/d/u/duo_star_5.jpg",
      "price": 100,
      "size": "14/16",
      "count": 42
  },
  {
      "id": 103,
      "name": "Фрезія Double White",
      "url": "https://florium.ua/media/catalog/product/cache/2/file/9df78eab33525d08d6e5fb8d27136e95/t/o/tov-frezija-double-white-1.jpg",
      "price": 27,
      "size": "4/5",
      "count": 16
  },
  {
      "id": 104,
      "name": "Ірис Dynamic Duet",
      "url": "https://florium.ua/media/catalog/product/cache/2/file/9df78eab33525d08d6e5fb8d27136e95/i/r/iris-dynamic-duet.jpg",
      "price": 18,
      "size": "6/7",
      "count": 55
  },
  {
      "id": 105,
      "name": "Клематис Omoshiro",
      "url": "https://florium.ua/media/catalog/product/cache/2/file/9df78eab33525d08d6e5fb8d27136e95/c/l/clematis-omoshiro.jpg",
      "price": 280,
      "size": "P7",
      "count": 8
  }
]


const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return acc+=item.price
  }, 0)
}

export default function ProductList() {
  const {addedItems, setAddedItems} = useState([]);
  const {tg} = useTelegram();

  // const onSendData = useCallback(() => {
  //   const data = {
  //     products: addedItems,
  //     totalPrice: getTotalPrice(addedItems),

  //   }
  // })

  const onAdd = (product) => {
    const alreadyAdded  = addedItems.find(item => item.id===product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter (item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0){
      tg.MainButton.hide();
    }  else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text : `Купити ${getTotalPrice(newItems)}`
      });

    }
  }

  return (
    <div className={'list'}>
        {products.map(item => {
          <ProductItem 
            product={item}
            onAdd = {onAdd}
            className={'item'}
          />
        })}
    </div>
  )
}
