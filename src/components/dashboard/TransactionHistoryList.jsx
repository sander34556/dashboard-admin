import { EllipsisVertical, Hamburger } from "lucide-react"



const TransactionHistoryList = ({ item }) => {

    
    return (
        <li className="px-9 py-4 border-b border-gray-200 flex items-center justify-between">

            <div className="flex gap-4 items-center">
                <div className="shadow w-10 h-10 flex items-center px-2 rounded-md text-gray-500">
                    <item.icon />
                </div>
                <div className="text-gray-600">
                    <div>{item.title}</div>
                    <div>{item.createAt}</div>
                </div>
            </div>

            <div className="flex text-gray-600">
                <div>{item.amount}</div>
                <div>
                    <EllipsisVertical />
                </div>
            </div>

        </li>
    )
}
export default TransactionHistoryList