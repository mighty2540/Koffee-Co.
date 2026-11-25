import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import StatCard from "../components/StatCard";
import SalesOverview from "../components/SalesOverview";
import TopProducts from   "../components/TopProducts";


function DashboardPage(){

  const {products} = useContext(ProductContext);
 

  // highest ordered coffee
  const mostOrderedProduct = [...products].sort(
    (a,b) => (b.orders || 0)- (a.orders || 0)
  )[0];

  // product that is out of stock
  const outOfStock = products.filter(
    (product) => product.inStock === false
  ).length;


  const totalSales = products.reduce(
    (total,product) => total + (product.price *(product.orders || 0)), 0
  );

  return (
      <div className="w-full max-w-6xl mx-auto">

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#4A1F16]">
            Dashboard
          </h1>

          <p className="text-base text-gray-500 mt-1">
            Welcome back to Koffee & Co.

          </p>

        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">

          <SalesOverview  
             totalSales={totalSales}
             products={products}
          />


          <div className="grid grid-rows-2 gap-5">

            <StatCard
               title={"Most Ordered"}
               value={mostOrderedProduct?.beanType || "N/A"}
               description={
                mostOrderedProduct ? `${mostOrderedProduct.name} (${mostOrderedProduct.orders || 0} orders)` : "No Products Available"
               }
            />

            <StatCard
              title="Out of Stock"
              value={outOfStock}
              description={"Products unavailable"}
            />


          </div>
        </div>

        <div className="mt-5">
          <TopProducts  products={products}/>
        </div>

      </div>
  )




}

export default DashboardPage;