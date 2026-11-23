
function TopProducts({ products }) {

    const topProducts = [...products]
        .sort((a, b) => (b.orders || 0) - (a.orders || 0))
        .slice(0, 5);

    return (
        <div className="bg-[#4A1F16] rounded-lg p-6">

            <h2 className="text-xl font-bold text-[#F8EBCB] mb-5">
                Top Products
            </h2>

            {topProducts.length > 0 ? (

                <div className="flex flex-col gap-3">

                    {topProducts.map((product, index) => (

                        <div
                            key={product.id}
                            className="flex items-center justify-between gap-4 bg-[#F8EBCB] text-[#4A1F16] p-4 rounded-lg"
                        >

                            <div className="flex items-center gap-3">

                                <span className="font-bold">
                                    {index + 1}.
                                </span>

                                <div>
                                    <p className="font-semibold">
                                        {product.name}
                                    </p>

                                    <p className="text-sm text-[#8B6B5C]">
                                        {product.beanType}
                                    </p>
                                </div>

                            </div>

                            <p className="font-semibold whitespace-nowrap">
                                {product.orders || 0} orders
                            </p>

                        </div>

                    ))}

                </div>

            ) : (

                <p className="text-[#F8EBCB]">
                    No products available.
                </p>

            )}

        </div>
    );
}

export default TopProducts;
