import { Route, Routes } from "react-router-dom";

import CategoryMenu from "./components/category-menu/category-menu.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<CategoryMenu />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
