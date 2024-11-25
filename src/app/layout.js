import "./globals.css";
import Navbar from "./Components/navbar.js"
import Menu from "./Components/menu.js"

export const metadata = {
  title: "Charlie's Portfolio Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-slate-200 m-3 rounded-lg min-h-screen">
          <Navbar />
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
