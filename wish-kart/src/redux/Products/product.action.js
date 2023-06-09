import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  ADD_NEW_PRODUCT,
  REMOVE_PRODUCT,
} from "./product.actionTypes.js";
import axios from "axios";
export const getProducts = async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let res = await axios.get(
      "https://meesho-backend-3037.onrender.com/products"
    );

    // console.log(res.data)  /////your product data get 

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};

export const addNewProduct = (state) => async (dispatch) => {
  let res = await fetch("https://meesho-backend-3037.onrender.com/products", {
    method: "POST",
    body: JSON.stringify(state),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  dispatch({ type: ADD_NEW_PRODUCT, payload: data });
  // console.log("new_data-productAction line28", data);
};

export const removeProduct = (id) => async (dispatch) => {
  let res = await fetch(
    `https://meesho-backend-3037.onrender.com/products/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );


  ///
  try {
    let res = await axios.get(
      "https://meesho-backend-3037.onrender.com/products"
    );
    console.log("after Delete", res.data);   ///your product data get after removing
    dispatch({ type: REMOVE_PRODUCT, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};
