import ProductListing from "../components/ProductListing";

function ProductsPage() {
    return(
        <div className="w-full max-w-6xl mx-auto">
             <header className="mb-8">
                 <h1 className="text-3xl font-bold text-[#4A1F16]">
                     Products
                </h1>
                <p className="text-base text-[#8B6B5C] mt-1">
                    Manage your coffee collection
                </p>
            </header>

            <ProductListing />
            
        </div>
    )
}

export default ProductsPage;