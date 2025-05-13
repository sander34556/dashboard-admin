import TransactionHistoryFooter from "./TransactionHistoryFooter"
import TransactionHistoryHeader from "./TransactionHistoryHeader"



const TransactionHistory = () => {
    return (
        <div className="flex flex-col w-full h-full bg-white shadow-sm rounded-lg">

            <TransactionHistoryHeader />

            <ul className="flex-1">
                <li className="">1</li>
                <li className="">2</li>
                <li className="">3</li>
                <li className="">4</li>
                <li className="">5</li>
                <li className="">6</li>
            </ul>
            
            <TransactionHistoryFooter />
        </div>
    )
}
export default TransactionHistory