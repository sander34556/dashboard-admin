import CardSummary from "../components/dashboard/CardSummary"
import ChartSummary from "../components/dashboard/ChartSummary"
import TransactionHistory from "../components/dashboard/TransactionHistory"



const Dashboard = () => {
    const boxStyl = 'bg-white border rounded-xl p-2 flex items-center justify-center'


    return (
        <div className="grid md:grid-cols lg:grid-cols-6 auto-rows-[100px] gap-4 my-1">
            <CardSummary />
            <CardSummary />
            <CardSummary />
            <CardSummary />
            <div className={`${boxStyl} lg:row-span-5 lg:col-span-2`}>
                <TransactionHistory />
            </div>
            <div className={`${boxStyl} lg:row-span-4 lg:col-span-4`}>
                <ChartSummary />
            </div>
        </div>

    )
}
export default Dashboard