import styles from './ProductCart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useItemsListDispatchContext, useItemsListContext } from '../../core/contexts/CartContext'

function CartItem({id, name, quantity}) {
  const dispatch = useItemsListDispatchContext()

  function handleClick() {
    dispatch({
      type: 'delete',
      id
    })
  }

  return (
    <li className={styles.cartItem}>
      <p className={styles.name}>
        <span className={styles.square}></span>
        <span>{name}</span>
      </p>
      <p>
        <span className={styles.quantityTxt}>Quantity: {quantity}</span>
        <span 
          className={styles['delete-btn']}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </p>
    </li>
  )
}

export default function ProductCart() {
  const cartItems = useItemsListContext()

  if(cartItems.length === 0) {
    return <p>No items</p>
  }
  return (
    <ul className={styles.productCart}>
      {
        cartItems.map(item => {
          return <CartItem 
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
          />
        })
      }
    </ul>
  )
}