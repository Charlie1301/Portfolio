import "./globals.css";

export const metadata = {
  title: "Charlie's Portfolio Website"w
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
