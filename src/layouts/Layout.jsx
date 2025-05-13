import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"



const Layout = () => {
    return (
        <main>
            <Navbar />

            <div className="flex flex-col min-h-screen pt-16">
                <div className="container flex-1 ">
                    <div className="">
                        Content
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}
export default Layout