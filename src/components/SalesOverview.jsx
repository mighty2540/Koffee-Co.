function SalesOverview({totalSales, products}) {

    const topFive = [...products]
       .sort((a,b)=> (b.orders || 0) - (a.orders || 0))
       .slice(0,5)


    const maxOrders = Math.max(...topFive.map((product)=> product.orders || 0), 1);

    return (
        <div className="bg-[#4A1F16] text-[#F8EBCB] p-5 rounded-lg h-full">

            <h2 className="text-xl font-bold">
                Sales Overview
            </h2>

            <p className="text-3xl font-bold mt-2">
                Ksh {totalSales.toLocaleString()}
            </p>

            <p className="text-sm mt-1 text-[#E8D8B5]">
                Estimated sales from recoreded product orders
            </p>

            <div className="flex items-end justify-between gap-3 mt-8 h-36">

                {topFive.map((product)=> {
                    const height = ((product.orders || 0) / maxOrders) * 100;

                    return(
                        <div
                          key={product.id}
                          className="flex flex-col items-center justify-end flex-1 h-full"
                        >

                            <div className="w-full bg-[#F8EBCB] rounded-t-md" style={{
                                height: `${height}%`,
                                minHeight:product.orders > 0 ? "8px" : "0px"
                            }} />

                            <p className="text-xs mt-2 text-center truncate w-full">
                                {product.name}

                            </p>

                            
                        </div>

                    )
                })}

            </div>

        </div>
    )
}

    export default SalesOverview;