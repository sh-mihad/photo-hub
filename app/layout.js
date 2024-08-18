import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Photo Hub",
  description: "Create By Sabbir Hossen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
         <div className="container my-4 lg:my-8">
         {children}
         </div>
        </body>
    </html>
  );
}
