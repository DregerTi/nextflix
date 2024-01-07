import Header from "@/components/organismes/Header";
import Footer from "@/components/organismes/Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex min-h-screen flex-col items-center">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
