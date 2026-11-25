import { NavLink } from "react-router-dom";

function Sidebar(){

    return(
        <aside className="w-64 shrink-0 min-h-screen bg-[#4A1F16] text-[#F8EBCB] p-6">
            <h1 className="text-2xl font-mogra mb-10">
                Koffee & Co.
            </h1>

            <nav className="flex flex-col gap-4">

                <NavLink
                to="/"
                end
                className={({isActive}) => 
                    `p-3 rounded-lg ${
                        isActive
                        ? "bg-[#6B3828] font-semibold"
                        : "hover:bg-[#6B3828]"
                    }`
                }
                >
                    Dashboard
                </NavLink>

                 <NavLink
                to="/products"
                className={({isActive}) => 
                    `p-3 rounded-lg ${
                        isActive
                        ? "bg-[#6B3828] font-semibold"
                        : "hover:bg-[#6B3828]"
                    }`
                }
                >
                    Products
                </NavLink>

                 <NavLink
                to="/add-product"
                end
                className={({isActive}) => 
                    `p-3 rounded-lg ${
                        isActive
                        ? "bg-[#6B3828] font-semibold"
                        : "hover:bg-[#6B3828]"
                    }`
                }
                >
                    Add Product
                </NavLink>

                 <NavLink
                to="/analytics"
                end
                className={({isActive}) => 
                    `p-3 rounded-lg ${
                        isActive
                        ? "bg-[#6B3828] font-semibold"
                        : "hover:bg-[#6B3828]"
                    }`
                }
                >
                    Analytics
                </NavLink>

            </nav>

        </aside>
    )

}

export default Sidebar;