import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ExploreDetails from "./Components/ExploreDetails";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Product from "./Components/Product";
import { productData, productDataTwo } from "./Components/Product/data";
import { GlobalStyle } from "./globalStyle";

function App() {
  
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/details/:name">
          <ExploreDetails data={productData} />
        </Route>
        <Route exact path="/">
          <Hero />
          <Product heading="Welcome to Pizza Palace" data={productData} />
          <Feature />
          <Product heading="Welcome to Sweets" data={productDataTwo} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
