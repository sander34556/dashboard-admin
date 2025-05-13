import { Calendar } from "lucide-react"



const TransactionHistoryHeader = () => {
    return (
        <div className="flex items-center justify-center gap-2 border-b border-gray-200 h-10 text-gray-600 ">
            <Calendar className="w-4 " />
            <h1 className="text-sm">Your Transaction History</h1>
        </div>
    )
}
export default TransactionHistoryHeader