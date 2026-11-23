import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductForm() {

    const { addProduct } = useContext(ProductContext);



    function handleSubmit(e) {
        e.preventDefault();

        // capturing storing details entered by users
        const newProduct = {
            id: Date.now(),
            name: e.target.name.value,
            origin: e.target.origin.value,
            price: Number(e.target.price.value),
            beanType: e.target.beanType.value,
            orders: 0,
            inStock: true,
            image: e.target.image.value
        }

        addProduct(newProduct);
        e.target.reset();
    }



    return (
        <div className="w-full max-w-3xl mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-sm border border-[#D6C2A8] flex flex-col gap-5"
            >
                <h2 className="text-2xl font-bold text-[#4A1F16]">
                    Add New Coffee Product
                </h2>
                <p className="text-[#8B6B5C] text-sm">
                    Enter the details of the coffee product you want to add.
                </p>
                <input
                    type="text"
                    name="name"
                    placeholder="Product name"
                    required
                    className="w-full border border-[#D6C2A8] rounded-lg px-4 py-3 text-[#4A1F16] placeholder-[#8B6B5C] outline-none focus:ring-2 focus:ring-[#C49A6C]"
                />
                <input
                    type="text"
                    name="origin"
                    placeholder="Origin"
                    required
                    className="w-full border border-[#D6C2A8] rounded-lg px-4 py-3 text-[#4A1F16] placeholder-[#8B6B5C] outline-none focus:ring-2 focus:ring-[#C49A6C]"
                />
                <input
                    type="url"
                    name="image"
                    placeholder="Paste image URL here"
                    required
                    className="w-full border border-[#D6C2A8] rounded-lg px-4 py-3 text-[#4A1F16] placeholder-[#8B6B5C] outline-none focus:ring-2 focus:ring-[#C49A6C]"

                />
                <input
                    type="number"
                    min="0"
                    name="price"
                    placeholder="Price"
                    required
                    className="w-full border border-[#D6C2A8] rounded-lg px-4 py-3 text-[#4A1F16] placeholder-[#8B6B5C] outline-none focus:ring-2 focus:ring-[#C49A6C]"
                />
                <input
                    type="text"
                    name="beanType"
                    placeholder="Bean type"
                    required
                    className="w-full border border-[#D6C2A8] rounded-lg px-4 py-3 text-[#4A1F16] placeholder-[#8B6B5C] outline-none focus:ring-2 focus:ring-[#C49A6C]"
                />

                <button
                    type="submit"
                    className="bg-[#4A1F16] text-[#F8EBCB] font-semibold py-3 rounded-lg hover:bg-[#6B3828] transition-colors"
                >
                    Add Product
                </button>
            </form>
        </div>

    )
}

export default ProductForm;