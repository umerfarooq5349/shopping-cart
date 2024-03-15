export const addToCart = async (id) => {
  try {
    // Perform your asynchronous operation here
    console.log(`Fetching product with ID: ${id}`);
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const products = [];

export const saveProduct = async (id) => {
  try {
    // add product in array
    console.log(`Adding product with ID ${id} to the products array`);
    products.push(await addToCart(id));

    // convert arr into str
    console.log(`Converting products array to JSON string`);
    let myCartStr = JSON.stringify(products);

    // save str to local storage
    console.log(`Storing products array as JSON string in local storage`);
    localStorage.setItem("myCartStr", myCartStr);

    // get str from local storage
    getProducts();
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getProducts = async () => {
  let myCartArr = localStorage.getItem("myCartStr");
  console.log(
    `Retrieved products array as JSON string from local storage: ${myCartArr}`
  );

  // convert str to arr
  console.log(`Converting JSON string back to products array`);

  let myCart = JSON.parse(myCartArr);

  console.log("Products array from local storage:", myCart);

  return myCart;
};
