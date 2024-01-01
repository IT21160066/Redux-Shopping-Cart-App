import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

// export const fetchData = () => {
//   return async (dispatch) => {
//     const fetchHanlder = async () => {
//       const res = await fetch(
//         "https://redux-shop-a69e8-default-rtdb.firebaseio.com/cartitems.json"
//       );
//       const data = await res.json();
//       return data;
//     };
//     try {
//       const cartData = await fetchHanlder();
//       dispatch(cartActions.replaceData(cartData));
//     } catch (err) {
//       dispatch(
//         uiActions.showNotification({
//           open: true,
//           message: "Sending Request failed",
//           type: "error",
//         })
//       );
//     }
//   };
// };

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-shop-a69e8-default-rtdb.firebaseio.com/cartitems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent Request to database successfully",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request failed",
          type: "error",
        })
      );
    }
  };
};
