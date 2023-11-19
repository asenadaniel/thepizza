// Define types for your Redux state
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  products: Product[];
  // Other properties within your cart slice, if any
}

// Define RootState representing the entire Redux state
interface RootState {
  cart: CartState;
  // Other slices of your Redux state, if any
}

export default RootState;
