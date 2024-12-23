import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, Sidebar } from "@/components";

const roboto = Noto_Sans({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  // display: "swap",
});

export const metadata = {
  title: "WorkerGen Assesment- Timothy Onyeacholam",
  description: "Implemented by Timothy: workerGen Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="relative">
          <div className="flex h-screen">
            <Sidebar />
            <div className="w-3/4 flex-grow animate-slide_up overflow-y-auto bg-[#F8F8F8] p-4 pl-12 pt-7">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
