import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Products from "./components/pages/Products";
import Customers from "./components/pages/Customers";
import Purchases from "./components/pages/Purchases";
import EditProduct from "./components/pages/EditProduct";
import EditCustomer from "./components/pages/EditCustomer";
import Transaction from "./components/pages/Transaction";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />}></Route>
          <Route path="menu" element={<Menu />}>
            <Route path="products" element={<Products />} />
            <Route path="customers" element={<Customers />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="editProducts/:productId" element={<EditProduct />} />
            <Route
              path="editcustomers/:customersName"
              element={<EditCustomer />}
            />
            <Route
              path="products/transactions/:customerName"
              element={<Transaction />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
