import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navegation from "./routes/home/navigation/navigation.component";
import Checkout from "./routes/sheckout/sheckout.component";
import Shop from "./routes/shop/shop.component";

import { setCurrentUser } from "./store/user/user.actions.js";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListner,
} from "./utils/firebase/firebase.util";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChangeListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsuscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navegation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
