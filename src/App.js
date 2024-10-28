<<<<<<< HEAD
import CategoryMenu from "./components/category-menu/category-menu.component";

const App = () => {
  return <CategoryMenu />;
=======
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navegation from "./routes/home/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";


const Shop = () => {
  return <h1>I am the shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navegation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
>>>>>>> 661aff9 (created sign up component, the form component, button component)
};

export default App;
