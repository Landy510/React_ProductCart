import { createContext, useContext, useReducer } from "react";

const ItemsListContext = createContext(null)

const ItemsListDispatchContext = createContext(null)

export function CartContextProvider({children}) {
  const [itemsList, dispatch] = useReducer(itemListReducer, [])

  return (
    <ItemsListContext.Provider value={itemsList}>
      <ItemsListDispatchContext.Provider value={dispatch}>
        {children}
      </ItemsListDispatchContext.Provider>
    </ItemsListContext.Provider>
  )

}


function itemListReducer(itemsList, action) {
  switch(action.type) {
    case 'add':
      return [
        ...itemsList,
        {
          id: action.id,
          name: action.name,
          quantity: action.quantity
        }
      ]
    case 'delete':
      return itemsList.filter(item => item.id !== action.id)
    default:
      throw Error('Unknown action' + action.type)
  }
}

export function useItemsListContext() {
  return useContext(ItemsListContext)
}

export function useItemsListDispatchContext() {
  return useContext(ItemsListDispatchContext)
}