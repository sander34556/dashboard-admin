

const allowedColors = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500"
};

const CardSummary = ({
    title = 'Untitled',
    amount = 0,
    color = 'red',
    icon = null
}) => {
    const dotColor = allowedColors[color] || allowedColors.red;

    return (
        <div className="relative bg-white rounded-lg shadow-sm p-4 flex justify-between items-center overflow-hidden">
            {/* left */}
            <div className="z-10">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className={`h-2 w-2 rounded-full ${dotColor}`}></span>
                    <span>{title}</span>
                </div>
                <div className="text-xl font-semibold text-gray-800 mt-2">
                    {amount}
                </div>
            </div>

            {/* icon */}
            {icon && (
                <div className="absolute right-2 bottom-2 text-gray-300 opacity-20 text-6xl z-0">
                    {icon}
                </div>
            )}
        </div>
    )
}
export default CardSummary