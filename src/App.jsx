import './App.css'
import ProductsList from './features/ProductList/ProductList'
import ProductCart from './features/ProductCart/ProductCart'
import { CartContextProvider } from './core/contexts/CartContext'
function App() {

  return (
    <div className="wrapper">
      <CartContextProvider>
        <ProductsList />
        <ProductCart />
      </CartContextProvider>
    </div>
  )
}

export default App
