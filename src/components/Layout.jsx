import { Outlet } from "react-router-dom";
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import Loader from "./Loader"
import { Suspense } from "react";

export default function Layout() {
    return (
        <>
         <Header />
         <main>
            <Suspense fallback={<Loader />}>
             <Outlet />
            </Suspense>
         </main>
         <Footer />
        </>
    );
}
