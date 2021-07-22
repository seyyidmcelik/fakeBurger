import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/action/cartAction";

const Navi = () => {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "6vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 3%",
          fontSize: "x-large",
          background: `linear-gradient(135deg, black 35%, orange 60%)`,
        }}
      >
        <div style={{ color: "#D48900", cursor: "pointer" }}>Fake Burger</div>
        <div style={{ color: "#000000" }}>
          <span
            className="fas fa-user"
            style={{ paddingRight: "10px", cursor: "pointer" }}
            data-bs-toggle="modal"
            href="#exampleModalToggle"
          ></span>
          <div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div
                className="modal-content"
                style={{ backgroundColor: "rgb(136, 194, 179, 0.4 )" }}
              >
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModalToggleLabel">
                    Fake Burger - Sign In
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form action="/" onSubmit={(e) => e.preventDefault()}>
                    <div
                      className="form-group mb-2"
                      style={{ fontSize: "20px" }}
                    >
                      <label htmlFor="signInMail">Email address</label>
                      <input
                        type="email"
                        name="signInMail"
                        className="form-control mb-3"
                        id="signInMail"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div
                      className="form-group mb-2"
                      style={{ fontSize: "20px" }}
                    >
                      <label htmlFor="signInPassword">Password</label>
                      <input
                        style={{ fontSize: "20px" }}
                        type="password"
                        name="signInPassword"
                        className="form-control mb-3"
                        id="signInPassword"
                        required
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        name="signInCheckbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        style={{
                          width: "23px",
                          height: "23px",
                          position: "relative",
                          top: "4px",
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                        style={{ fontSize: "19px" }}
                      >
                        Check me out
                      </label>
                    </div>
                    <button
                      style={{
                        fontSize: "20px",
                        backgroundColor: "transparent",
                        color: "blue",
                        cursor: "pointer",
                        border: "none",
                      }}
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      You don't have account yet ?
                    </button>
                    <br />
                    <div style={{ textAlign: "end" }}>
                      <button type="reset" className="btn btn-danger mt-3">
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary mt-3 mx-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div
                className="modal-content"
                style={{ backgroundColor: "rgb(136, 194, 179, 0.4 )" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    Fake Burger - Register
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div
                      className="form-group mb-2"
                      style={{ fontSize: "20px" }}
                    >
                      <label htmlFor="registerMail">Email address</label>
                      <input
                        type="email"
                        name="registerMail"
                        className="form-control"
                        id="registerMail"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div
                      className="form-group mb-2"
                      style={{ fontSize: "20px" }}
                    >
                      <label htmlFor="registerPassword">Password</label>
                      <input
                        style={{ fontSize: "20px" }}
                        name="registerPassword"
                        type="password"
                        className="form-control"
                        id="registerPassword"
                        required
                      />
                    </div>
                    <div className="my-3" style={{ textAlign: "start" }}>
                      <button type="reset" className="btn btn-danger">
                        Reset
                      </button>
                      <button type="submit" className="btn btn-success mx-3">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <span
            className="fas fa-shopping-cart"
            data-bs-toggle="modal"
            href="#cart"
            style={{ cursor: "pointer" }}
          ></span>
          <div
            className="modal fade"
            id="cart"
            aria-hidden="true"
            aria-labelledby="cart"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div
                className="modal-content"
                style={{ backgroundColor: "rgb(136, 194, 179, 0.4 )" }}
              >
                <div className="modal-header">
                  <h4
                    className="modal-title"
                    id="cart"
                    style={{ fontWeight: "bolder" }}
                  >
                    Your Cart <span className="fas fa-shopping-cart"></span>
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {cart.length > 0 ? (
                    <table style={{ margin: "0 auto" }}>
                      <thead>
                        <tr>
                          <th>Burger</th>
                          <th style={{ paddingRight: "15px" }}>Quantity</th>
                          <th style={{ paddingRight: "15px" }}>Price</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((cartItem) => (
                          <tr key={cartItem.product.id}>
                            <td>{cartItem.product.name}</td>
                            <td style={{ textAlign: "center" }}>
                              {cartItem.quantity}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {cartItem.product.price * cartItem.quantity}
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  dispatch(removeFromCart(cartItem.product))
                                }
                                className="btn btn-danger"
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <h4>Empty Cart</h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div
              className="d-block w-100"
              alt="..."
              style={{
                height: "94vh",
                background:
                  "url(https://images.unsplash.com/photo-1610614991969-ceeb293e7ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1080)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div
              className="d-block w-100"
              alt="..."
              style={{
                height: "94vh",
                background:
                  "url(https://images.unsplash.com/photo-1552604617-eea98aa27234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=1080)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div
              className="d-block w-100"
              alt="..."
              style={{
                height: "94vh",
                background:
                  "url(https://images.unsplash.com/photo-1599113234792-18621e4f9f05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1080)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Navi;
