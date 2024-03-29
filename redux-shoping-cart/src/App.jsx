import "./App.css";
import Auth from './components/Auth';
import Layout from './components/Layout.jsx'
import { useSelector } from 'react-redux'

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn);

  const cartItems = useSelector((state) => state.cart.itemList)
  console.log(cartItems);
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;

