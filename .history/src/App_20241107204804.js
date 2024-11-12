import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navegation from "./routes/home/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/sheckout/sheckout.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navegation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;