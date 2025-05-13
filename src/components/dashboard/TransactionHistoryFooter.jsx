import { Wallet } from "lucide-react"


const TransactionHistoryFooter = () => {
    return (
        <div className="border-t border-gray-200 max-w-full">
            <div className="flex items-center justify-between h-16 px-6 gap-2 text-nowrap">
                <div className="flex grow items-center justify-start gap-2 text-gray-600 md:hidden lg:flex">
                    <Wallet className="w-5"/>
                    <h3 className="overflow-hidden text-sm text-clip">New transacntion</h3>
                </div>
                <button className="bg-blue-500 grow-0 rounded px-3 py-2 text-white cursor-pointer hover:bg-blue-800 text-clip md:w-full lg:w-fit">
                    ADD NEW
                </button>
            </div>
        </div>
    )
}
export default TransactionHistoryFooter