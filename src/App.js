import {useState, useEffect} from "react";
import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';

const { getData } = require("./db/db");

const products = getData();

const tele = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tele.ready();
    }, []);


    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) => {
                    return (x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x);
                })
            );
        } else {
            setCartItems([...cartItems, {...product, quantity : 1}]);
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);

        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
                )
            );
        }
    };

    const onCheckout = () => {
      tele.MainButton.text = "Pay...";
      tele.MainButton.show();
    };

  return (
      <>
          <h1 className="heading">Hi! Here you can buy our products!</h1>
          <Cart cartItems={cartItems} onCheckout={onCheckout}/>
          <div className="cards__container">
              {products.map(product => {
                  return <Card product={product} key={product.id} onAdd={onAdd} onRemove={onRemove}/>
              })}
          </div>

      </>
  );
}

export default App;
