import "./globals.css";
import Header from "./components/Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main className="max-w-screen-xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
