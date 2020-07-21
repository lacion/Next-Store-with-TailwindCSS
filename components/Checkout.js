import React from "react";
import { connect } from "react-redux";
import { REMOVE_FROM_CART } from "../actions/index";

const Checkout = ({ cart, dispatch }) => {
  console.log(cart);
  const mapCartItems = () => {
    return Object.keys(cart).map((item) => (
      <div className="item flex flex-row w-1/2 mx-auto my-0 justify-center">
        <img
          src={cart[item].image}
          className={`item__img`}
          width="100"
          height="100"
        />
        <div className="self-center px-16">
          <h2 className="text-2xl">{cart[item].name}</h2>
          <span className="text-xl">${cart[item].price}</span>
        </div>
        <button
          onClick={() =>
            dispatch({
              type: REMOVE_FROM_CART,
              item,
            })
          }
        >
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className={`flex flex-col w-4/5 mx-auto my-0`}>
      {Object.keys(cart).length === 0 ? "No saved items" : mapCartItems()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Checkout);
