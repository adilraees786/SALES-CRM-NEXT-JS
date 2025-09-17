'use client';

import { Provider } from "react-redux";
import store from "@/redux/store";
import { UserProvider } from "@/context/userContext";
import { ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <UserProvider>
                <ToastContainer closeOnClick />
                <NextTopLoader
                    color="#6c9aff"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    zIndex={1600}
                    showAtBottom={false}
                />
                {children}
            </UserProvider>
        </Provider>
    );
}
