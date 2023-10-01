import { CustomToaster } from "@/components/base/toaster";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavMenu } from "@/app/NavMenu";
import { ThemeProvider } from "@/components/ThemeProvider";
import { defaultTheme } from "@/lib/config";
import ThemeContextProvider from "@/contexts/theme-context";
import { getServerSession } from "next-auth";

// import SessionProvider from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo app",
  description: "Demo app using next.js",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionProvider session={session}> */}
        <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem disableTransitionOnChange>
          <ThemeContextProvider>
            <NavMenu />
            {children}
            <CustomToaster />
          </ThemeContextProvider>
        </ThemeProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
