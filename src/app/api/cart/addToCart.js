export const addToCart = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching results");
  }
};

const products = [];

export const saveProduct = async (id) => {
  try {
    products.push(await addToCart(id));

    // convert arr into str
    let myCartStr = JSON.stringify(products);

    // save str to local storage
    localStorage.setItem("myCartStr", myCartStr);

    // get str from local storage
    getProducts();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error while saving the product");
  }
};

export const getProducts = async () => {
  let myCartArr = localStorage.getItem("myCartStr");
  // convert str to arr
  let myCart = JSON.parse(myCartArr);
  return myCart;
};
