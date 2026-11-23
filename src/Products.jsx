  
  /// product listing
  
  import { useState } from "react";
import { coffeeBeans } from "./data.js";

export default function Products() {
  const [filter, setFilter] = useState("mostOrdered");

  let displayedBeans = [...coffeeBeans];

  if (filter === "mostOrdered") {
    displayedBeans.sort((a, b) => b.orders - a.orders);
  }
  if (filter === "lowToHigh") {
    displayedBeans.sort((a, b) => a.price - b.price);
  }
  if (filter === "highToLow") {
    displayedBeans.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <div>
        <button onClick={() => setFilter("mostOrdered")}>Most Ordered</button>
        <button onClick={() => setFilter("lowToHigh")}>Price: Low to High</button>
        <button onClick={() => setFilter("highToLow")}>Price: High to Low</button>
      </div>

      <div>
        {displayedBeans.map((bean) => (
          <div key={bean.id}>
            <img src={bean.image} alt={bean.name} width="200" />
            <h3>{bean.name}</h3>
            <p>{bean.origin} - {bean.beanType}</p>
            <p>Price: Ksh {bean.price}</p>
            <p>Orders: {bean.orders}</p>
            <p>{bean.inStock ? "In Stock" : "Out of Stock"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}