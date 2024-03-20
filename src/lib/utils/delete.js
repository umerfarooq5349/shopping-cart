import { getProducts } from "@/app/api/cart/addToCart";

export const deleteFromCart = async (id) => {
  // Fetch all products from the cart
  const allProducts = await getProducts();

  // Filter out the product to delete
  const toDelete = allProducts.filter((p) => p.id === id);

  // Check if the product exists before attempting to access it
  if (toDelete.length > 0) {
    console.log("To delete from cart: " + toDelete[0].title);

    // Filter out the product with the specified ID
    const updatedCart = allProducts.filter((p) => p.id !== id);

    console.log("After delete from cart: ", updatedCart);

    // Save the updated cart back to local storage
    localStorage.setItem("myCartStr", JSON.stringify(updatedCart));
  } else {
    throw new Error("Product not found in the cart.");
  }
};
