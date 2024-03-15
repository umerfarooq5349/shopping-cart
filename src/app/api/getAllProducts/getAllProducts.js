export const getAllProducts = async () => {
  let response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
