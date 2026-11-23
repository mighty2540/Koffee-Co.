import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function DashboardLayout() {
    return (
        <div className="flex min-h-screen bg-[#F8EBCB]">
            <Sidebar />

            <main className="flex-1 min-w-0 p-4 md:p-8">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;