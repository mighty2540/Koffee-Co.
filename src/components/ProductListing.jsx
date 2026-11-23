import {useContext, useState} from "react";
import { ProductContext } from "../context/ProductContext";


function ProductListing(){

    const { products } = useContext(ProductContext);

    const [ search, setSearch] = useState("");
    const [filter, setFilter] = useState("mostOrdered");

    // search => products by name

    const filteredProducts = products.filter((bean) => bean.name.toLowerCase().includes(search.toLocaleLowerCase())
);

    const displayedBeans = [...filteredProducts];


    // sorting => products

    if (filter === "mostOrdered") {
        displayedBeans.sort(
            (a,b) => (b.orders || 0) - (a.orders || 0)
        );
    }

    if (filter === "LowToHigh") {
        displayedBeans.sort((a,b) => a.price - b.price);
    }

    if (filter === "highToLow") {
        displayedBeans.sort((a,b) => b.price - a.price);
    }

    return (
        <div className="w-full">

            <input 
              type="text" 
              placeholder="search coffee beans..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md bg-white border border-[#D6C2A8] rounded-lg px-4 py-3 text-[#4a1f16] placeholder-[#8B6B5C] outline-none focus:ring-2 focus:ring-[#C49A6C] "
              />

              <div className=" flex flex-wrap gap-3 mt-5 mb-6">

                <button onClick={() => setFilter("mostOrdered")} className="bg-[#4A1F16] text-[#F8EBCB] px-4 py-2 rounded-lg"> 
                    Most Ordered
                </button>

                 <button
                 onClick= {() => setFilter("LowToHigh")}
                className="bg-[#4A1F16] text-[#F8EBCB] px-4 py-2 rounded-lg">
                    Price: Low to High

                 </button>

                 <button onClick={() => setFilter("highToLow")} className="bg-[#4A1F16] text-[#F8EBCB] px-4 py-2 rounded-lg">
                    Price: High to Low

                 </button>
                

              </div>

              // grid product

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {displayedBeans.length > 0 ? (
                    displayedBeans.map((bean) => (
                        <div 
                        key={bean.id} 
                        className="bg-white border border-[#D6C2A8] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"> 

                        <img src={bean.image}
                        alt={bean.name || "https://placehold.co/600x400?text=Coffee"} 
                        className= "w-full h-48 object-cover"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src= ""
                        }}
                         />

                         <div className="p-5">

                            <h3 className="text-xl font-bold text-[#4A1F16]">
                                {bean.name}
                            </h3>

                            <p className="text-[#8B6B5C] mt-2">
                                Origin: {bean.origin}

                            </p>

                            <p className="text-[#8B6B5C]">
                                Type: {bean.beanType}

                            </p>

                            <p className="text-lg font-semibold text-[#4A1F16] mt-3">
                                Ksh {bean.price}
                            </p>

                            <p className="text-sm text-gray-500 mt-2">
                                Orders: {bean.orders || 0}

                            </p>
                              

                            <p className={`mt-3 font-semibold text-sm ${
                                    bean.inStock
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}>

                                    {bean.inStock ? "In Stock" : "Out of Stock"}
                            </p>
                           
                        

                          

                         </div>


                        </div>

                ))

            ) : ( 

                <p className="text-[#8B6B5C]">
                    No Product Found.

                </p>

            )}

              </div>

        </div>
    )


}

export default ProductListing;