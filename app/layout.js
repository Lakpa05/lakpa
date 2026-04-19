import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Lakpa Sherpa",
    description: "Lakpa Sherpa is a frontend web developer. I am a self-taught developer with 2 years of experience.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-0TBVN5QCES"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-0TBVN5QCES');
                    `}
                </Script>

                {children}
            </body>
        </html>
    );
}