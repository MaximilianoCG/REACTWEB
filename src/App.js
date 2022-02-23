import React, {useState, useEffect } from "react";
import "./App.css";
import Header from './Components/Header/Header'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Views/Home';
import Cart from './Components/Views/Cart';
import {bd} from './firebaseconfig';
import { collection, query, where, getDocs } from "firebase/firestore";

function App() {
    const [productData, setproductData] = useState([]);
/*     console.log(productData);
 */
    useEffect(() => {
        const getProducts = async () => {
          const q = query(collection(bd, "Products"));
          const querySnapshot = await getDocs(q);
          /* console.log('DATA:',querySnapshot); */
          querySnapshot.forEach((doc) => {
            console.log("DATA:", doc.data(), "ID:", doc.id);
          })
        };
        getProducts();
    }, []);


  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
