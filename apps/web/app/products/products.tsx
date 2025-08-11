import { Product } from "@repo/types";
export default async function Products() {
  const response = await fetch(`${process.env.API_URL}/products`, {
    next: {
      tags: ["products"],
    },
    method: "get",
  });
console.log("products arr resp", response)
  const products: Product[] = await response.json();

  return (
    <div>
      <h1>Products</h1>
      {products.map((el) => (
        <>
          <h3>{el.id}</h3>
          <h1>{el.name}</h1>
        </>
      ))}

    </div>
  );
}
