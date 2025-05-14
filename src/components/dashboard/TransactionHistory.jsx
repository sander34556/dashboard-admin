import TransactionHistoryFooter from "./TransactionHistoryFooter"
import TransactionHistoryHeader from "./TransactionHistoryHeader"
import TransactionHistoryList from "./TransactionHistoryList"
import { transactionList } from '../../utils/transactionlist'


const TransactionHistory = () => {
    return (
        <div className="flex flex-col w-full h-full bg-white shadow-sm rounded-lg">

            <TransactionHistoryHeader />

            <ul className="flex-1 overflow-y-auto">
                {
                    transactionList.map((item, index) =>
                        <TransactionHistoryList
                            key={index}
                            item={item}
                        />)
                }

            </ul>

            <TransactionHistoryFooter />
        </div>
    )
}
export default TransactionHistory