import CardSummary from "../components/dashboard/CardSummary"
import ChartSummary from "../components/dashboard/ChartSummary"
import TransactionHistory from "../components/dashboard/TransactionHistory"



const Dashboard = () => {
    const boxStyl = 'bg-white shadow-sm rounded-lg'


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-[100px] gap-4 my-1">
            <CardSummary />
            <CardSummary />
            <CardSummary />
            <CardSummary />
            <div className={`col-span-2 row-span-3 md:col-start-3 md:row-start-1 md:row-span-5 md:col-span-1  lg:row-span-5 lg:col-span-2`}>
                <TransactionHistory />
            </div>
            <div className={`${boxStyl} col-start-1 row-start-3 col-span-2 row-span-2  md:row-span-3 md:col-span-2 lg:row-span-4 lg:col-span-4`}>
                <ChartSummary />
            </div>
        </div>

    )
}
export default Dashboard