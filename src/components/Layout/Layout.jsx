import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CustomCursor from '../CustomCursor/CustomCursor';

const Chatbot = lazy(() => import('../Chatbot/Chatbot'));

export default function Layout() {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <CustomCursor />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Suspense fallback={null}>
                <Chatbot />
            </Suspense>
        </>
    );
}
