

import Loader from "@/components/reuseable/Loader";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
    title: "Sales Crm",
    description: "Sales Crm",
};

export default function RootLayout({ children })
{
    return (
        <html lang="en">
            <body className="font-sans">
                <Provider>
                    <Loader />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
