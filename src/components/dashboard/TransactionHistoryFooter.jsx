import { Wallet } from "lucide-react"


const TransactionHistoryFooter = () => {
    return (
        <div className="border-t border-gray-200 max-w-full">

            <div className="flex items-center justify-between h-16 px-3 gap-2 py-3">

                <div className="flex items-center gap-2 md:hidden lg:flex">
                    <Wallet className="w-5" />
                    <h3 className="text-sm">New transacntion</h3>
                </div>

                <div className="bg-blue-500 text-white rounded md:w-full lg:w-fit px-3 py-2 cursor-pointer hover:bg-blue-800 flex items-center justify-center text-nowrap">
                    ADD NEW
                </div>

            </div>
        </div>
    )
}
export default TransactionHistoryFooter
