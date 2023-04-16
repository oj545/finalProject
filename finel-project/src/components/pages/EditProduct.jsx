import { useState } from "react";
import "../UI/UI.css";
import "./css/main.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { rootActions } from "../../redux/dataSlice";
import CustomerList from "../elemnts/customerList";
import Container from "../UI/Container";

function EditProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customers, products } = useSelector((state) => state.root);
  const { productId } = useParams();

  const currentProduct = products.find((item) => item.id === productId);

  const [product, setProduct] = useState({
    id: productId,
    name: currentProduct?.name,
    price: currentProduct?.price,
    quantity: currentProduct?.quantity,
    customersId: currentProduct?.customersId,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(rootActions.UpdateProduct(product));
    navigate("/menu/products");
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(rootActions.deleteProduct({ id: productId, name: product.name }));
    navigate("/menu/products");
  };

  const cstomersList = customers.filter((item) =>
    item.productsIds.includes(productId)
  );

  return (
    <Container>
      <div className="edit-controll">
        <form className="form-controll" onSubmit={submitHandler}>
          <label className="label">name</label>
          <input
            value={product.name}
            type="text"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <label className="label">Price</label>
          <input
            value={product.price}
            type="number"
            onChange={(e) => setProduct({ ...product, price: +e.target.value })}
          />
          <label className="label">Quantity</label>
          <input
            value={product.quantity}
            type="number"
            onChange={(e) =>
              setProduct({ ...product, quantity: +e.target.value })
            }
          />

          <div className="buttons">
            <button className="btn-submit" type="submit">
              Save changes
            </button>
            <button className="btn-delete" onClick={deleteHandler}>
              Delet product
            </button>
          </div>
        </form>
        <div>
          <CustomerList cstomersList={cstomersList} />
        </div>
      </div>
    </Container>
  );
}

export default EditProduct;
