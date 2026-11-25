import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";


function ProductListing() {

    const { products, deleteProduct, editProduct } = useContext(ProductContext);

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("mostOrdered");

    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({
        name: "",
        origin: "",
        price: "",
        beanType: ""
    })

    // search => products by name

    const filteredProducts = products.filter((bean) => bean.name.toLowerCase().includes(search.toLocaleLowerCase())
    );

    const displayedBeans = [...filteredProducts];


    // sorting => products

    if (filter === "mostOrdered") {
        displayedBeans.sort(
            (a, b) => (b.orders || 0) - (a.orders || 0)
        );
    }

    if (filter === "LowToHigh") {
        displayedBeans.sort((a, b) => a.price - b.price);
    }

    if (filter === "highToLow") {
        displayedBeans.sort((a, b) => b.price - a.price);
    }

    function startEdit(bean) {
        setEditingId(bean.id);

        setEditForm({
            name: bean.name,
            origin: bean.origin,
            price: bean.price,
            beanType: bean.beanType
        });
    }

    function handleEditChange(e){
        const {name, value} = e.target;

        setEditForm((previousForm) => ({
            ...previousForm, [name]: value
        }));
    }


    function handleEditSubmit(e) {
        e.preventDefault();

        editProduct(editingId, {
            ...editForm,
            price: Number(editForm.price)
        });

        setEditingId(null)
    }


    function handleDelete(productId) {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this Koffee Product"
        );

        if (confirmDelete) {
            deleteProduct(productId);

            if (editingId === productId) {
                setEditingId(null);
            }
        }
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
                    onClick={() => setFilter("LowToHigh")}
                    className="bg-[#4A1F16] text-[#F8EBCB] px-4 py-2 rounded-lg">
                    Price: Low to High

                </button>

                <button onClick={() => setFilter("highToLow")} className="bg-[#4A1F16] text-[#F8EBCB] px-4 py-2 rounded-lg">
                    Price: High to Low

                </button>


            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {displayedBeans.length > 0 ? (
                    displayedBeans.map((bean) => (
                        <div
                            key={bean.id}
                            className="bg-white border border-[#D6C2A8] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">

                            <img src={bean.image}
                                alt={bean.name || "https://placehold.co/600x400?text=Coffee"}
                                className="w-full h-48 object-cover"
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = ""
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


                                <p className={`mt-3 font-semibold text-sm ${bean.inStock
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}>

                                    {bean.inStock ? "In Stock" : "Out of Stock"}
                                </p>


                                <div className="flex gap-3 mt-5">

                                    <button
                                        type="button"
                                        onClick={() => startEdit(bean)}
                                        className="flex-1 bg-[#4A1F16] text-[#F8EBCB] py-2 rounded-lg hover:bg-[#6B3828]"
                                    >
                                        Edit

                                    
                                    </button>

                                    <button 
                                       type="button"
                                        onClick={() => handleDelete(bean.id)}
                                        className="flex-1 bg-red-700 text-white py-2 rounded-lg hover:bg-[#6B3828]">

                                        Delete

                                    </button>




                                </div>






                            </div>


                        </div>

                    ))

                ) : (

                    <p className="text-[#8B6B5C]">
                        No Product Found.

                    </p>

                )}

            </div>

              {editingId !== null && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

                    <div className="bg-[#F8EBCB] w-full max-w-lg rounded-xl p-6 shadow-xl">

                        <h2 className="text-2xl font-bold text-[#4A1F16] mb-5">
                            Edit Product
                        </h2>

                        <form
                            onSubmit={handleEditSubmit}
                            className="flex flex-col gap-4"
                        >

                            <div>
                                <label className="block text-[#4A1F16] font-semibold mb-1">
                                    Product Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={editForm.name}
                                    onChange={handleEditChange}
                                    required
                                    className="w-full border border-[#D6C2A8] rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C49A6C]"
                                />
                            </div>

                            <div>
                                <label className="block text-[#4A1F16] font-semibold mb-1">
                                    Origin
                                </label>

                                <input
                                    type="text"
                                    name="origin"
                                    value={editForm.origin}
                                    onChange={handleEditChange}
                                    required
                                    className="w-full border border-[#D6C2A8] rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C49A6C]"
                                />
                            </div>

                            <div>
                                <label className="block text-[#4A1F16] font-semibold mb-1">
                                    Price (Ksh)
                                </label>

                                <input
                                    type="number"
                                    name="price"
                                    min="0"
                                    value={editForm.price}
                                    onChange={handleEditChange}
                                    required
                                    className="w-full border border-[#D6C2A8] rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C49A6C]"
                                />
                            </div>

                            <div>
                                <label className="block text-[#4A1F16] font-semibold mb-1">
                                    Bean Type
                                </label>

                                <input
                                    type="text"
                                    name="beanType"
                                    value={editForm.beanType}
                                    onChange={handleEditChange}
                                    required
                                    className="w-full border border-[#D6C2A8] rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C49A6C]"
                                />
                            </div>

                            <div className="flex gap-3 mt-3">

                                <button
                                    type="submit"
                                    className="flex-1 bg-[#4A1F16] text-[#F8EBCB] py-3 rounded-lg hover:bg-[#6B3828]"
                                >
                                    Save Changes
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setEditingId(null)}
                                    className="flex-1 border border-[#4A1F16] text-[#4A1F16] py-3 rounded-lg hover:bg-[#EEDFC7]"
                                >
                                    Cancel
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </div>
    )


}

export default ProductListing;