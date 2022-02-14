import "./App.css";
import Header from './Components/Header/Header'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Views/Home';
import Cart from './Components/Views/Cart';

function App() {
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
