import { useState } from "react";
import styles from './ProductList.module.css'
import { useItemsListDispatchContext } from "../../core/contexts/CartContext";
import { v4 as uuidv4 } from 'uuid';

function Product(item) {
  const dispatch = useItemsListDispatchContext()
  const [quantity, setQuantity] = useState(0)
  function handleClick(num) {
    if(num > 0 && quantity + num > 9) return
    if(num < 0 && quantity + num < 0) return
    setQuantity(quantity + num)
  }

  function handleAdd(info) {
    dispatch({
      type: 'add',
      id: uuidv4(),
      name: info.name,
      quantity
    })
  }

  return (
    <li className={styles.product}>
      <img 
        src={item.imgUrl} 
        alt="" 
        className="productImg" 
      />
      <h3 className={styles.name}>
        {item.name}
      </h3>
      <p className={styles.btnGroup}>
        <span 
          className={styles.btn}
          onClick={() => handleClick(-1)}
        >-</span>
        <span>
          <input 
            max={9}
            type="text" 
            value={quantity}
            onInput={e => setQuantity(e.target.value)}
          />
        </span>
        <span
          className={styles.btn}
          onClick={() => handleClick(+1)}
        >+</span>
      </p>
      <button 
        className={styles.addBtn}
        onClick={() => handleAdd(item)}
      >Add</button>
    </li>
  )
}


export default function ProductsList() {
  return (
    <ul className={styles.productsList}>
      {
        products.map(item => {
          return (
            <Product 
              key={item.id}
              {...item}
            />
          )
        })
      }
    </ul>
  )
}

const products = [
  {
    id: 0,
    name: 'Sneaker',
    imgUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 1,
    name: 'Protein Shake',
    imgUrl: 'https://images.unsplash.com/photo-1584116831289-e53912463c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    name: 'Cap',
    imgUrl: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
]