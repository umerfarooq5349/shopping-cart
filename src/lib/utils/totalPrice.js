import { getProducts } from "@/app/api/cart/addToCart";

export const totalPrice = async () => {
  let myCart = await getProducts();
  let totalPrice = 0;
  if (myCart) {
    myCart.forEach((product) => {
      totalPrice += product.price;
    });
  }
  return totalPrice;
};
