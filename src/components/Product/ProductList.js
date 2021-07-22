import React, { useEffect } from "react";
import alertify from "alertifyjs";
import { getProducts } from "../../redux/action/getProductsAction";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
import { addToCart } from "../../redux/action/cartAction";

const onClickHandle = (product) => {
  alertify.success(product.name + " added to cart");
};

const ProductList = () => {
  const products = useSelector((state) => state.getProductsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div className="row" style={{ margin: "0 auto" }}>
        {products.map((product) => (
          <div
            key={product.id}
            className=" col-md-12 col-lg-4 flex flex-nowrap justify-content-center"
          >
            <div className="card my-2">
              <div
                style={{
                  height: "500px",
                  background: `url(${product.picture})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
              <div className="card-body">
                <h4
                  className="card-title"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="card-title-span">{product.name}</span>
                  <span>
                    <em>${product.price}</em>
                  </span>
                </h4>
                <p className="card-text">{product.description}</p>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({ quantity: 1, product }),
                      onClickHandle(product)
                    )
                  }
                  style={{
                    padding: "7px 15px",
                    border: "3px solid gray",
                    background: "rgb(255, 165, 0,.8)",
                    color: "#000",
                    fontSize: "larger",
                    borderRadius: "7px",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
