function StatCard({ title, value, description }) {
    return (
        <div className="bg-[#4A1F16] text-[#F8EBCB] p-4 rounded-lg">
            <h3 className="text-base font-bold">{title}</h3>

            <p className="text-3xl font-bold mt-2">
                {value}
            </p>

            <p className="text-sm mt-1 text-[#E8D8B5]">
                {description}
            </p>
        </div>
    );
}

export default StatCard;       